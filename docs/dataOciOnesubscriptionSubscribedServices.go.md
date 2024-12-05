# `dataOciOnesubscriptionSubscribedServices` Submodule <a name="`dataOciOnesubscriptionSubscribedServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionSubscribedServices <a name="DataOciOnesubscriptionSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services oci_onesubscription_subscribed_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServices(scope Construct, id *string, config DataOciOnesubscriptionSubscribedServicesConfig) DataOciOnesubscriptionSubscribedServices
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig">DataOciOnesubscriptionSubscribedServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig">DataOciOnesubscriptionSubscribedServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOrderLineId">ResetOrderLineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetId"></a>

```go
func ResetId()
```

##### `ResetOrderLineId` <a name="ResetOrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOrderLineId"></a>

```go
func ResetOrderLineId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedServices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServices_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServices_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServices_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServices_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOnesubscriptionSubscribedServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOnesubscriptionSubscribedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionSubscribedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList">DataOciOnesubscriptionSubscribedServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscribedServices">SubscribedServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineIdInput">OrderLineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineId">OrderLineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filter"></a>

```go
func Filter() DataOciOnesubscriptionSubscribedServicesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList">DataOciOnesubscriptionSubscribedServicesFilterList</a>

---

##### `SubscribedServices`<sup>Required</sup> <a name="SubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscribedServices"></a>

```go
func SubscribedServices() DataOciOnesubscriptionSubscribedServicesSubscribedServicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrderLineIdInput`<sup>Optional</sup> <a name="OrderLineIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineIdInput"></a>

```go
func OrderLineIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrderLineId`<sup>Required</sup> <a name="OrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineId"></a>

```go
func OrderLineId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionSubscribedServicesConfig <a name="DataOciOnesubscriptionSubscribedServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	SubscriptionId: *string,
	Filter: interface{},
	Id: *string,
	OrderLineId: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.orderLineId">OrderLineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#filter DataOciOnesubscriptionSubscribedServices#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrderLineId`<sup>Optional</sup> <a name="OrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.orderLineId"></a>

```go
OrderLineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}.

---

### DataOciOnesubscriptionSubscribedServicesFilter <a name="DataOciOnesubscriptionSubscribedServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#name DataOciOnesubscriptionSubscribedServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#values DataOciOnesubscriptionSubscribedServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#regex DataOciOnesubscriptionSubscribedServices#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#name DataOciOnesubscriptionSubscribedServices#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#values DataOciOnesubscriptionSubscribedServices#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#regex DataOciOnesubscriptionSubscribedServices#regex}.

---

### DataOciOnesubscriptionSubscribedServicesSubscribedServices <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServices {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact {

}
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

&dataocionesubscriptionsubscribedservices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionSubscribedServicesFilterList <a name="DataOciOnesubscriptionSubscribedServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOnesubscriptionSubscribedServicesFilterOutputReference <a name="DataOciOnesubscriptionSubscribedServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.tcaLocationId"></a>

```go
func TcaLocationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.billSiteUseId"></a>

```go
func BillSiteUseId() *string
```

- *Type:* *string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isBillTo"></a>

```go
func IsBillTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isShipTo"></a>

```go
func IsShipTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.location"></a>

```go
func Location() DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.service2SiteUseId"></a>

```go
func Service2SiteUseId() *string
```

- *Type:* *string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```go
func TcaCustAcctSiteId() *string
```

- *Type:* *string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaPartySiteNumber"></a>

```go
func TcaPartySiteNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount">LineNetAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.quantity">Quantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.availableAmount"></a>

```go
func AvailableAmount() *string
```

- *Type:* *string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```go
func FundedAllocationValue() *string
```

- *Type:* *string

---

##### `LineNetAmount`<sup>Required</sup> <a name="LineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount"></a>

```go
func LineNetAmount() *string
```

- *Type:* *string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.quantity"></a>

```go
func Quantity() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.tcaLocationId"></a>

```go
func TcaLocationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.billSiteUseId"></a>

```go
func BillSiteUseId() *string
```

- *Type:* *string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isBillTo"></a>

```go
func IsBillTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isShipTo"></a>

```go
func IsShipTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.location"></a>

```go
func Location() DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.service2SiteUseId"></a>

```go
func Service2SiteUseId() *string
```

- *Type:* *string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaCustAcctSiteId"></a>

```go
func TcaCustAcctSiteId() *string
```

- *Type:* *string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaPartySiteNumber"></a>

```go
func TcaPartySiteNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.adminEmail">AdminEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementId">AgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementName">AgreementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementType">AgreementType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billingFrequency">BillingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToAddress">BillToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToContact">BillToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToCustomer">BillToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.bookingOptyNumber">BookingOptyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.buyerEmail">BuyerEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentScheduleId">CommitmentScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentServices">CommitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creditPercentage">CreditPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.csi">Csi</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.customerTransactionReference">CustomerTransactionReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenter">DataCenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenterRegion">DataCenterRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.eligibleToRenew">EligibleToRenew</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserAddress">EndUserAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserContact">EndUserContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserCustomer">EndUserCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fulfillmentSet">FulfillmentSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isAllowance">IsAllowance</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCapToPriceList">IsCapToPriceList</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCreditEnabled">IsCreditEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isHavingUsage">IsHavingUsage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isPayg">IsPayg</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isSingleRateCard">IsSingleRateCard</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isVariableCommitment">IsVariableCommitment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.lineNetAmount">LineNetAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.majorSet">MajorSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.operationType">OperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderHeaderId">OrderHeaderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineId">OrderLineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineNumber">OrderLineNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderNumber">OrderNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderType">OrderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.originalPromoAmount">OriginalPromoAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageBillTo">OverageBillTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageDiscountPercentage">OverageDiscountPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overagePolicy">OveragePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerCreditAmount">PartnerCreditAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerTransactionType">PartnerTransactionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paygPolicy">PaygPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentNumber">PaymentNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentTerm">PaymentTerm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricePeriod">PricePeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricingModel">PricingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.programType">ProgramType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoOrderLineId">PromoOrderLineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promotionPricingType">PromotionPricingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoType">PromoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.provisioningSource">ProvisioningSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.quantity">Quantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCardDiscountPercentage">RateCardDiscountPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCards">RateCards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.ratecardType">RatecardType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyId">RenewalOptyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyNumber">RenewalOptyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyType">RenewalOptyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewedSubscribedServiceId">RenewedSubscribedServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerAddress">ResellerAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerContact">ResellerContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerCustomer">ResellerCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineId">RevenueLineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineNumber">RevenueLineNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInLc">RevisedArrInLc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInSc">RevisedArrInSc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesAccountPartyId">SalesAccountPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesChannel">SalesChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToAddress">ServiceToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToContact">ServiceToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToCustomer">ServiceToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToContact">SoldToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToCustomer">SoldToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.startDateType">StartDateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionSource">SubscriptionSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInLc">SystemArrInLc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInSc">SystemArrInSc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInLc">SystemAtrArrInLc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInSc">SystemAtrArrInSc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValue">TermValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValueUom">TermValueUom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeAgreementEnd">TimeAgreementEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCustomerConfig">TimeCustomerConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetEnd">TimeMajorsetEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetStart">TimeMajorsetStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timePaymentExpiry">TimePaymentExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeProvisioned">TimeProvisioned</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeServiceConfigurationEmailSent">TimeServiceConfigurationEmailSent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeWelcomeEmailSent">TimeWelcomeEmailSent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.totalValue">TotalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.transactionExtensionId">TransactionExtensionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.usedAmount">UsedAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices">DataOciOnesubscriptionSubscribedServicesSubscribedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminEmail`<sup>Required</sup> <a name="AdminEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.adminEmail"></a>

```go
func AdminEmail() *string
```

- *Type:* *string

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementId"></a>

```go
func AgreementId() *string
```

- *Type:* *string

---

##### `AgreementName`<sup>Required</sup> <a name="AgreementName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementName"></a>

```go
func AgreementName() *string
```

- *Type:* *string

---

##### `AgreementType`<sup>Required</sup> <a name="AgreementType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementType"></a>

```go
func AgreementType() *string
```

- *Type:* *string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.availableAmount"></a>

```go
func AvailableAmount() *string
```

- *Type:* *string

---

##### `BillingFrequency`<sup>Required</sup> <a name="BillingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billingFrequency"></a>

```go
func BillingFrequency() *string
```

- *Type:* *string

---

##### `BillToAddress`<sup>Required</sup> <a name="BillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToAddress"></a>

```go
func BillToAddress() DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList</a>

---

##### `BillToContact`<sup>Required</sup> <a name="BillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToContact"></a>

```go
func BillToContact() DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList</a>

---

##### `BillToCustomer`<sup>Required</sup> <a name="BillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToCustomer"></a>

```go
func BillToCustomer() DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList</a>

---

##### `BookingOptyNumber`<sup>Required</sup> <a name="BookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.bookingOptyNumber"></a>

```go
func BookingOptyNumber() *string
```

- *Type:* *string

---

##### `BuyerEmail`<sup>Required</sup> <a name="BuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.buyerEmail"></a>

```go
func BuyerEmail() *string
```

- *Type:* *string

---

##### `CommitmentScheduleId`<sup>Required</sup> <a name="CommitmentScheduleId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentScheduleId"></a>

```go
func CommitmentScheduleId() *string
```

- *Type:* *string

---

##### `CommitmentServices`<sup>Required</sup> <a name="CommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentServices"></a>

```go
func CommitmentServices() DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreditPercentage`<sup>Required</sup> <a name="CreditPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creditPercentage"></a>

```go
func CreditPercentage() *string
```

- *Type:* *string

---

##### `Csi`<sup>Required</sup> <a name="Csi" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.csi"></a>

```go
func Csi() *string
```

- *Type:* *string

---

##### `CustomerTransactionReference`<sup>Required</sup> <a name="CustomerTransactionReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.customerTransactionReference"></a>

```go
func CustomerTransactionReference() *string
```

- *Type:* *string

---

##### `DataCenter`<sup>Required</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenter"></a>

```go
func DataCenter() *string
```

- *Type:* *string

---

##### `DataCenterRegion`<sup>Required</sup> <a name="DataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenterRegion"></a>

```go
func DataCenterRegion() *string
```

- *Type:* *string

---

##### `EligibleToRenew`<sup>Required</sup> <a name="EligibleToRenew" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.eligibleToRenew"></a>

```go
func EligibleToRenew() *string
```

- *Type:* *string

---

##### `EndUserAddress`<sup>Required</sup> <a name="EndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserAddress"></a>

```go
func EndUserAddress() DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList</a>

---

##### `EndUserContact`<sup>Required</sup> <a name="EndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserContact"></a>

```go
func EndUserContact() DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList</a>

---

##### `EndUserCustomer`<sup>Required</sup> <a name="EndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserCustomer"></a>

```go
func EndUserCustomer() DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList</a>

---

##### `FulfillmentSet`<sup>Required</sup> <a name="FulfillmentSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fulfillmentSet"></a>

```go
func FulfillmentSet() *string
```

- *Type:* *string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fundedAllocationValue"></a>

```go
func FundedAllocationValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAllowance`<sup>Required</sup> <a name="IsAllowance" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isAllowance"></a>

```go
func IsAllowance() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsCapToPriceList`<sup>Required</sup> <a name="IsCapToPriceList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCapToPriceList"></a>

```go
func IsCapToPriceList() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsCreditEnabled`<sup>Required</sup> <a name="IsCreditEnabled" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCreditEnabled"></a>

```go
func IsCreditEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHavingUsage`<sup>Required</sup> <a name="IsHavingUsage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isHavingUsage"></a>

```go
func IsHavingUsage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isIntentToPay"></a>

```go
func IsIntentToPay() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPayg`<sup>Required</sup> <a name="IsPayg" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isPayg"></a>

```go
func IsPayg() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSingleRateCard`<sup>Required</sup> <a name="IsSingleRateCard" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isSingleRateCard"></a>

```go
func IsSingleRateCard() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsVariableCommitment`<sup>Required</sup> <a name="IsVariableCommitment" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isVariableCommitment"></a>

```go
func IsVariableCommitment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LineNetAmount`<sup>Required</sup> <a name="LineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.lineNetAmount"></a>

```go
func LineNetAmount() *string
```

- *Type:* *string

---

##### `MajorSet`<sup>Required</sup> <a name="MajorSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.majorSet"></a>

```go
func MajorSet() *string
```

- *Type:* *string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.operationType"></a>

```go
func OperationType() *string
```

- *Type:* *string

---

##### `OrderHeaderId`<sup>Required</sup> <a name="OrderHeaderId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderHeaderId"></a>

```go
func OrderHeaderId() *string
```

- *Type:* *string

---

##### `OrderLineId`<sup>Required</sup> <a name="OrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineId"></a>

```go
func OrderLineId() *string
```

- *Type:* *string

---

##### `OrderLineNumber`<sup>Required</sup> <a name="OrderLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineNumber"></a>

```go
func OrderLineNumber() *f64
```

- *Type:* *f64

---

##### `OrderNumber`<sup>Required</sup> <a name="OrderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderNumber"></a>

```go
func OrderNumber() *string
```

- *Type:* *string

---

##### `OrderType`<sup>Required</sup> <a name="OrderType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderType"></a>

```go
func OrderType() *string
```

- *Type:* *string

---

##### `OriginalPromoAmount`<sup>Required</sup> <a name="OriginalPromoAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.originalPromoAmount"></a>

```go
func OriginalPromoAmount() *string
```

- *Type:* *string

---

##### `OverageBillTo`<sup>Required</sup> <a name="OverageBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageBillTo"></a>

```go
func OverageBillTo() *string
```

- *Type:* *string

---

##### `OverageDiscountPercentage`<sup>Required</sup> <a name="OverageDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageDiscountPercentage"></a>

```go
func OverageDiscountPercentage() *string
```

- *Type:* *string

---

##### `OveragePolicy`<sup>Required</sup> <a name="OveragePolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overagePolicy"></a>

```go
func OveragePolicy() *string
```

- *Type:* *string

---

##### `PartnerCreditAmount`<sup>Required</sup> <a name="PartnerCreditAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerCreditAmount"></a>

```go
func PartnerCreditAmount() *string
```

- *Type:* *string

---

##### `PartnerTransactionType`<sup>Required</sup> <a name="PartnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerTransactionType"></a>

```go
func PartnerTransactionType() *string
```

- *Type:* *string

---

##### `PaygPolicy`<sup>Required</sup> <a name="PaygPolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paygPolicy"></a>

```go
func PaygPolicy() *string
```

- *Type:* *string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentMethod"></a>

```go
func PaymentMethod() *string
```

- *Type:* *string

---

##### `PaymentNumber`<sup>Required</sup> <a name="PaymentNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentNumber"></a>

```go
func PaymentNumber() *string
```

- *Type:* *string

---

##### `PaymentTerm`<sup>Required</sup> <a name="PaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentTerm"></a>

```go
func PaymentTerm() DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList</a>

---

##### `PricePeriod`<sup>Required</sup> <a name="PricePeriod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricePeriod"></a>

```go
func PricePeriod() *string
```

- *Type:* *string

---

##### `PricingModel`<sup>Required</sup> <a name="PricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricingModel"></a>

```go
func PricingModel() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.product"></a>

```go
func Product() DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList</a>

---

##### `ProgramType`<sup>Required</sup> <a name="ProgramType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.programType"></a>

```go
func ProgramType() *string
```

- *Type:* *string

---

##### `PromoOrderLineId`<sup>Required</sup> <a name="PromoOrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoOrderLineId"></a>

```go
func PromoOrderLineId() *string
```

- *Type:* *string

---

##### `PromotionPricingType`<sup>Required</sup> <a name="PromotionPricingType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promotionPricingType"></a>

```go
func PromotionPricingType() *string
```

- *Type:* *string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoType"></a>

```go
func PromoType() *string
```

- *Type:* *string

---

##### `ProvisioningSource`<sup>Required</sup> <a name="ProvisioningSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.provisioningSource"></a>

```go
func ProvisioningSource() *string
```

- *Type:* *string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.quantity"></a>

```go
func Quantity() *string
```

- *Type:* *string

---

##### `RateCardDiscountPercentage`<sup>Required</sup> <a name="RateCardDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCardDiscountPercentage"></a>

```go
func RateCardDiscountPercentage() *string
```

- *Type:* *string

---

##### `RateCards`<sup>Required</sup> <a name="RateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCards"></a>

```go
func RateCards() DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList</a>

---

##### `RatecardType`<sup>Required</sup> <a name="RatecardType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.ratecardType"></a>

```go
func RatecardType() *string
```

- *Type:* *string

---

##### `RenewalOptyId`<sup>Required</sup> <a name="RenewalOptyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyId"></a>

```go
func RenewalOptyId() *string
```

- *Type:* *string

---

##### `RenewalOptyNumber`<sup>Required</sup> <a name="RenewalOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyNumber"></a>

```go
func RenewalOptyNumber() *string
```

- *Type:* *string

---

##### `RenewalOptyType`<sup>Required</sup> <a name="RenewalOptyType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyType"></a>

```go
func RenewalOptyType() *string
```

- *Type:* *string

---

##### `RenewedSubscribedServiceId`<sup>Required</sup> <a name="RenewedSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewedSubscribedServiceId"></a>

```go
func RenewedSubscribedServiceId() *string
```

- *Type:* *string

---

##### `ResellerAddress`<sup>Required</sup> <a name="ResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerAddress"></a>

```go
func ResellerAddress() DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList</a>

---

##### `ResellerContact`<sup>Required</sup> <a name="ResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerContact"></a>

```go
func ResellerContact() DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList</a>

---

##### `ResellerCustomer`<sup>Required</sup> <a name="ResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerCustomer"></a>

```go
func ResellerCustomer() DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList</a>

---

##### `RevenueLineId`<sup>Required</sup> <a name="RevenueLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineId"></a>

```go
func RevenueLineId() *string
```

- *Type:* *string

---

##### `RevenueLineNumber`<sup>Required</sup> <a name="RevenueLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineNumber"></a>

```go
func RevenueLineNumber() *string
```

- *Type:* *string

---

##### `RevisedArrInLc`<sup>Required</sup> <a name="RevisedArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInLc"></a>

```go
func RevisedArrInLc() *string
```

- *Type:* *string

---

##### `RevisedArrInSc`<sup>Required</sup> <a name="RevisedArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInSc"></a>

```go
func RevisedArrInSc() *string
```

- *Type:* *string

---

##### `SalesAccountPartyId`<sup>Required</sup> <a name="SalesAccountPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesAccountPartyId"></a>

```go
func SalesAccountPartyId() *string
```

- *Type:* *string

---

##### `SalesChannel`<sup>Required</sup> <a name="SalesChannel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesChannel"></a>

```go
func SalesChannel() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `ServiceToAddress`<sup>Required</sup> <a name="ServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToAddress"></a>

```go
func ServiceToAddress() DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList</a>

---

##### `ServiceToContact`<sup>Required</sup> <a name="ServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToContact"></a>

```go
func ServiceToContact() DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList</a>

---

##### `ServiceToCustomer`<sup>Required</sup> <a name="ServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToCustomer"></a>

```go
func ServiceToCustomer() DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList</a>

---

##### `SoldToContact`<sup>Required</sup> <a name="SoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToContact"></a>

```go
func SoldToContact() DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList</a>

---

##### `SoldToCustomer`<sup>Required</sup> <a name="SoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToCustomer"></a>

```go
func SoldToCustomer() DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList</a>

---

##### `StartDateType`<sup>Required</sup> <a name="StartDateType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.startDateType"></a>

```go
func StartDateType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `SubscriptionSource`<sup>Required</sup> <a name="SubscriptionSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionSource"></a>

```go
func SubscriptionSource() *string
```

- *Type:* *string

---

##### `SystemArrInLc`<sup>Required</sup> <a name="SystemArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInLc"></a>

```go
func SystemArrInLc() *string
```

- *Type:* *string

---

##### `SystemArrInSc`<sup>Required</sup> <a name="SystemArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInSc"></a>

```go
func SystemArrInSc() *string
```

- *Type:* *string

---

##### `SystemAtrArrInLc`<sup>Required</sup> <a name="SystemAtrArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInLc"></a>

```go
func SystemAtrArrInLc() *string
```

- *Type:* *string

---

##### `SystemAtrArrInSc`<sup>Required</sup> <a name="SystemAtrArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInSc"></a>

```go
func SystemAtrArrInSc() *string
```

- *Type:* *string

---

##### `TermValue`<sup>Required</sup> <a name="TermValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValue"></a>

```go
func TermValue() *string
```

- *Type:* *string

---

##### `TermValueUom`<sup>Required</sup> <a name="TermValueUom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValueUom"></a>

```go
func TermValueUom() *string
```

- *Type:* *string

---

##### `TimeAgreementEnd`<sup>Required</sup> <a name="TimeAgreementEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeAgreementEnd"></a>

```go
func TimeAgreementEnd() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeCustomerConfig`<sup>Required</sup> <a name="TimeCustomerConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCustomerConfig"></a>

```go
func TimeCustomerConfig() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeMajorsetEnd`<sup>Required</sup> <a name="TimeMajorsetEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetEnd"></a>

```go
func TimeMajorsetEnd() *string
```

- *Type:* *string

---

##### `TimeMajorsetStart`<sup>Required</sup> <a name="TimeMajorsetStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetStart"></a>

```go
func TimeMajorsetStart() *string
```

- *Type:* *string

---

##### `TimePaymentExpiry`<sup>Required</sup> <a name="TimePaymentExpiry" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timePaymentExpiry"></a>

```go
func TimePaymentExpiry() *string
```

- *Type:* *string

---

##### `TimeProvisioned`<sup>Required</sup> <a name="TimeProvisioned" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeProvisioned"></a>

```go
func TimeProvisioned() *string
```

- *Type:* *string

---

##### `TimeServiceConfigurationEmailSent`<sup>Required</sup> <a name="TimeServiceConfigurationEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeServiceConfigurationEmailSent"></a>

```go
func TimeServiceConfigurationEmailSent() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TimeWelcomeEmailSent`<sup>Required</sup> <a name="TimeWelcomeEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeWelcomeEmailSent"></a>

```go
func TimeWelcomeEmailSent() *string
```

- *Type:* *string

---

##### `TotalValue`<sup>Required</sup> <a name="TotalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.totalValue"></a>

```go
func TotalValue() *string
```

- *Type:* *string

---

##### `TransactionExtensionId`<sup>Required</sup> <a name="TransactionExtensionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.transactionExtensionId"></a>

```go
func TransactionExtensionId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UsedAmount`<sup>Required</sup> <a name="UsedAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.usedAmount"></a>

```go
func UsedAmount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices">DataOciOnesubscriptionSubscribedServicesSubscribedServices</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.isActive">IsActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.isoCode"></a>

```go
func IsoCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```go
func StdPrecision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.discretionaryDiscountPercentage">DiscretionaryDiscountPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.isTier">IsTier</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.overagePrice">OveragePrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.rateCardTiers">RateCardTiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.currency"></a>

```go
func Currency() DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList</a>

---

##### `DiscretionaryDiscountPercentage`<sup>Required</sup> <a name="DiscretionaryDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```go
func DiscretionaryDiscountPercentage() *string
```

- *Type:* *string

---

##### `IsTier`<sup>Required</sup> <a name="IsTier" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.isTier"></a>

```go
func IsTier() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.overagePrice"></a>

```go
func OveragePrice() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.product"></a>

```go
func Product() DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList</a>

---

##### `RateCardTiers`<sup>Required</sup> <a name="RateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.rateCardTiers"></a>

```go
func RateCardTiers() DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList</a>

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.subscribedServiceId"></a>

```go
func SubscribedServiceId() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.overagePrice">OveragePrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.upToQuantity">UpToQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```go
func OveragePrice() *string
```

- *Type:* *string

---

##### `UpToQuantity`<sup>Required</sup> <a name="UpToQuantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```go
func UpToQuantity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.tcaLocationId"></a>

```go
func TcaLocationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.billSiteUseId"></a>

```go
func BillSiteUseId() *string
```

- *Type:* *string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isBillTo"></a>

```go
func IsBillTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isShipTo"></a>

```go
func IsShipTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.location"></a>

```go
func Location() DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.service2SiteUseId"></a>

```go
func Service2SiteUseId() *string
```

- *Type:* *string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaCustAcctSiteId"></a>

```go
func TcaCustAcctSiteId() *string
```

- *Type:* *string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaPartySiteNumber"></a>

```go
func TcaPartySiteNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.tcaLocationId"></a>

```go
func TcaLocationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.billSiteUseId"></a>

```go
func BillSiteUseId() *string
```

- *Type:* *string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isBillTo"></a>

```go
func IsBillTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isShipTo"></a>

```go
func IsShipTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.location"></a>

```go
func Location() DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.service2SiteUseId"></a>

```go
func Service2SiteUseId() *string
```

- *Type:* *string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```go
func TcaCustAcctSiteId() *string
```

- *Type:* *string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaPartySiteNumber"></a>

```go
func TcaPartySiteNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservices"

dataocionesubscriptionsubscribedservices.NewDataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer</a>

---



