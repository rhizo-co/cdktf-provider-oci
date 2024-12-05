# `dataOciOnesubscriptionSubscribedService` Submodule <a name="`dataOciOnesubscriptionSubscribedService` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionSubscribedService <a name="DataOciOnesubscriptionSubscribedService" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service oci_onesubscription_subscribed_service}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedService(scope Construct, id *string, config DataOciOnesubscriptionSubscribedServiceConfig) DataOciOnesubscriptionSubscribedService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig">DataOciOnesubscriptionSubscribedServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig">DataOciOnesubscriptionSubscribedServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFields` <a name="ResetFields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetFields"></a>

```go
func ResetFields()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOnesubscriptionSubscribedService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOnesubscriptionSubscribedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionSubscribedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.adminEmail">AdminEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementId">AgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementName">AgreementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementType">AgreementType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.availableAmount">AvailableAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billingFrequency">BillingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToAddress">BillToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList">DataOciOnesubscriptionSubscribedServiceBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToContact">BillToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList">DataOciOnesubscriptionSubscribedServiceBillToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToCustomer">BillToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList">DataOciOnesubscriptionSubscribedServiceBillToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.bookingOptyNumber">BookingOptyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.buyerEmail">BuyerEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentScheduleId">CommitmentScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentServices">CommitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList">DataOciOnesubscriptionSubscribedServiceCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.creditPercentage">CreditPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.csi">Csi</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.customerTransactionReference">CustomerTransactionReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenter">DataCenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenterRegion">DataCenterRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.eligibleToRenew">EligibleToRenew</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserAddress">EndUserAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList">DataOciOnesubscriptionSubscribedServiceEndUserAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserContact">EndUserContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList">DataOciOnesubscriptionSubscribedServiceEndUserContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserCustomer">EndUserCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList">DataOciOnesubscriptionSubscribedServiceEndUserCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fulfillmentSet">FulfillmentSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isAllowance">IsAllowance</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCapToPriceList">IsCapToPriceList</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCreditEnabled">IsCreditEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isHavingUsage">IsHavingUsage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isIntentToPay">IsIntentToPay</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isPayg">IsPayg</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isSingleRateCard">IsSingleRateCard</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isVariableCommitment">IsVariableCommitment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lineNetAmount">LineNetAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.majorSet">MajorSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.operationType">OperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderHeaderId">OrderHeaderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineId">OrderLineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineNumber">OrderLineNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderNumber">OrderNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderType">OrderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.originalPromoAmount">OriginalPromoAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageBillTo">OverageBillTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageDiscountPercentage">OverageDiscountPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overagePolicy">OveragePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerCreditAmount">PartnerCreditAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerTransactionType">PartnerTransactionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paygPolicy">PaygPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentNumber">PaymentNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentTerm">PaymentTerm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList">DataOciOnesubscriptionSubscribedServicePaymentTermList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricePeriod">PricePeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricingModel">PricingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList">DataOciOnesubscriptionSubscribedServiceProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.programType">ProgramType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoOrderLineId">PromoOrderLineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promotionPricingType">PromotionPricingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoType">PromoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provisioningSource">ProvisioningSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.quantity">Quantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCardDiscountPercentage">RateCardDiscountPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCards">RateCards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList">DataOciOnesubscriptionSubscribedServiceRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.ratecardType">RatecardType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyId">RenewalOptyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyNumber">RenewalOptyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyType">RenewalOptyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewedSubscribedServiceId">RenewedSubscribedServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerAddress">ResellerAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList">DataOciOnesubscriptionSubscribedServiceResellerAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerContact">ResellerContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList">DataOciOnesubscriptionSubscribedServiceResellerContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerCustomer">ResellerCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList">DataOciOnesubscriptionSubscribedServiceResellerCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineId">RevenueLineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineNumber">RevenueLineNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInLc">RevisedArrInLc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInSc">RevisedArrInSc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesAccountPartyId">SalesAccountPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesChannel">SalesChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToAddress">ServiceToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList">DataOciOnesubscriptionSubscribedServiceServiceToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToContact">ServiceToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList">DataOciOnesubscriptionSubscribedServiceServiceToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToCustomer">ServiceToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList">DataOciOnesubscriptionSubscribedServiceServiceToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToContact">SoldToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList">DataOciOnesubscriptionSubscribedServiceSoldToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToCustomer">SoldToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList">DataOciOnesubscriptionSubscribedServiceSoldToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.startDateType">StartDateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionSource">SubscriptionSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInLc">SystemArrInLc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInSc">SystemArrInSc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInLc">SystemAtrArrInLc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInSc">SystemAtrArrInSc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValue">TermValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValueUom">TermValueUom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeAgreementEnd">TimeAgreementEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCustomerConfig">TimeCustomerConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetEnd">TimeMajorsetEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetStart">TimeMajorsetStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timePaymentExpiry">TimePaymentExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeProvisioned">TimeProvisioned</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeServiceConfigurationEmailSent">TimeServiceConfigurationEmailSent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeWelcomeEmailSent">TimeWelcomeEmailSent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.totalValue">TotalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.transactionExtensionId">TransactionExtensionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.usedAmount">UsedAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceIdInput">SubscribedServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdminEmail`<sup>Required</sup> <a name="AdminEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.adminEmail"></a>

```go
func AdminEmail() *string
```

- *Type:* *string

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementId"></a>

```go
func AgreementId() *string
```

- *Type:* *string

---

##### `AgreementName`<sup>Required</sup> <a name="AgreementName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementName"></a>

```go
func AgreementName() *string
```

- *Type:* *string

---

##### `AgreementType`<sup>Required</sup> <a name="AgreementType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementType"></a>

```go
func AgreementType() *string
```

- *Type:* *string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.availableAmount"></a>

```go
func AvailableAmount() *string
```

- *Type:* *string

---

##### `BillingFrequency`<sup>Required</sup> <a name="BillingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billingFrequency"></a>

```go
func BillingFrequency() *string
```

- *Type:* *string

---

##### `BillToAddress`<sup>Required</sup> <a name="BillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToAddress"></a>

```go
func BillToAddress() DataOciOnesubscriptionSubscribedServiceBillToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList">DataOciOnesubscriptionSubscribedServiceBillToAddressList</a>

---

##### `BillToContact`<sup>Required</sup> <a name="BillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToContact"></a>

```go
func BillToContact() DataOciOnesubscriptionSubscribedServiceBillToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList">DataOciOnesubscriptionSubscribedServiceBillToContactList</a>

---

##### `BillToCustomer`<sup>Required</sup> <a name="BillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToCustomer"></a>

```go
func BillToCustomer() DataOciOnesubscriptionSubscribedServiceBillToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList">DataOciOnesubscriptionSubscribedServiceBillToCustomerList</a>

---

##### `BookingOptyNumber`<sup>Required</sup> <a name="BookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.bookingOptyNumber"></a>

```go
func BookingOptyNumber() *string
```

- *Type:* *string

---

##### `BuyerEmail`<sup>Required</sup> <a name="BuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.buyerEmail"></a>

```go
func BuyerEmail() *string
```

- *Type:* *string

---

##### `CommitmentScheduleId`<sup>Required</sup> <a name="CommitmentScheduleId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentScheduleId"></a>

```go
func CommitmentScheduleId() *string
```

- *Type:* *string

---

##### `CommitmentServices`<sup>Required</sup> <a name="CommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentServices"></a>

```go
func CommitmentServices() DataOciOnesubscriptionSubscribedServiceCommitmentServicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList">DataOciOnesubscriptionSubscribedServiceCommitmentServicesList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreditPercentage`<sup>Required</sup> <a name="CreditPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.creditPercentage"></a>

```go
func CreditPercentage() *string
```

- *Type:* *string

---

##### `Csi`<sup>Required</sup> <a name="Csi" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.csi"></a>

```go
func Csi() *string
```

- *Type:* *string

---

##### `CustomerTransactionReference`<sup>Required</sup> <a name="CustomerTransactionReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.customerTransactionReference"></a>

```go
func CustomerTransactionReference() *string
```

- *Type:* *string

---

##### `DataCenter`<sup>Required</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenter"></a>

```go
func DataCenter() *string
```

- *Type:* *string

---

##### `DataCenterRegion`<sup>Required</sup> <a name="DataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenterRegion"></a>

```go
func DataCenterRegion() *string
```

- *Type:* *string

---

##### `EligibleToRenew`<sup>Required</sup> <a name="EligibleToRenew" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.eligibleToRenew"></a>

```go
func EligibleToRenew() *string
```

- *Type:* *string

---

##### `EndUserAddress`<sup>Required</sup> <a name="EndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserAddress"></a>

```go
func EndUserAddress() DataOciOnesubscriptionSubscribedServiceEndUserAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList">DataOciOnesubscriptionSubscribedServiceEndUserAddressList</a>

---

##### `EndUserContact`<sup>Required</sup> <a name="EndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserContact"></a>

```go
func EndUserContact() DataOciOnesubscriptionSubscribedServiceEndUserContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList">DataOciOnesubscriptionSubscribedServiceEndUserContactList</a>

---

##### `EndUserCustomer`<sup>Required</sup> <a name="EndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserCustomer"></a>

```go
func EndUserCustomer() DataOciOnesubscriptionSubscribedServiceEndUserCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList">DataOciOnesubscriptionSubscribedServiceEndUserCustomerList</a>

---

##### `FulfillmentSet`<sup>Required</sup> <a name="FulfillmentSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fulfillmentSet"></a>

```go
func FulfillmentSet() *string
```

- *Type:* *string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fundedAllocationValue"></a>

```go
func FundedAllocationValue() *string
```

- *Type:* *string

---

##### `IsAllowance`<sup>Required</sup> <a name="IsAllowance" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isAllowance"></a>

```go
func IsAllowance() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsCapToPriceList`<sup>Required</sup> <a name="IsCapToPriceList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCapToPriceList"></a>

```go
func IsCapToPriceList() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsCreditEnabled`<sup>Required</sup> <a name="IsCreditEnabled" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCreditEnabled"></a>

```go
func IsCreditEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHavingUsage`<sup>Required</sup> <a name="IsHavingUsage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isHavingUsage"></a>

```go
func IsHavingUsage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isIntentToPay"></a>

```go
func IsIntentToPay() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPayg`<sup>Required</sup> <a name="IsPayg" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isPayg"></a>

```go
func IsPayg() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSingleRateCard`<sup>Required</sup> <a name="IsSingleRateCard" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isSingleRateCard"></a>

```go
func IsSingleRateCard() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsVariableCommitment`<sup>Required</sup> <a name="IsVariableCommitment" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isVariableCommitment"></a>

```go
func IsVariableCommitment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LineNetAmount`<sup>Required</sup> <a name="LineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lineNetAmount"></a>

```go
func LineNetAmount() *string
```

- *Type:* *string

---

##### `MajorSet`<sup>Required</sup> <a name="MajorSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.majorSet"></a>

```go
func MajorSet() *string
```

- *Type:* *string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.operationType"></a>

```go
func OperationType() *string
```

- *Type:* *string

---

##### `OrderHeaderId`<sup>Required</sup> <a name="OrderHeaderId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderHeaderId"></a>

```go
func OrderHeaderId() *string
```

- *Type:* *string

---

##### `OrderLineId`<sup>Required</sup> <a name="OrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineId"></a>

```go
func OrderLineId() *string
```

- *Type:* *string

---

##### `OrderLineNumber`<sup>Required</sup> <a name="OrderLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineNumber"></a>

```go
func OrderLineNumber() *f64
```

- *Type:* *f64

---

##### `OrderNumber`<sup>Required</sup> <a name="OrderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderNumber"></a>

```go
func OrderNumber() *string
```

- *Type:* *string

---

##### `OrderType`<sup>Required</sup> <a name="OrderType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderType"></a>

```go
func OrderType() *string
```

- *Type:* *string

---

##### `OriginalPromoAmount`<sup>Required</sup> <a name="OriginalPromoAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.originalPromoAmount"></a>

```go
func OriginalPromoAmount() *string
```

- *Type:* *string

---

##### `OverageBillTo`<sup>Required</sup> <a name="OverageBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageBillTo"></a>

```go
func OverageBillTo() *string
```

- *Type:* *string

---

##### `OverageDiscountPercentage`<sup>Required</sup> <a name="OverageDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageDiscountPercentage"></a>

```go
func OverageDiscountPercentage() *string
```

- *Type:* *string

---

##### `OveragePolicy`<sup>Required</sup> <a name="OveragePolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overagePolicy"></a>

```go
func OveragePolicy() *string
```

- *Type:* *string

---

##### `PartnerCreditAmount`<sup>Required</sup> <a name="PartnerCreditAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerCreditAmount"></a>

```go
func PartnerCreditAmount() *string
```

- *Type:* *string

---

##### `PartnerTransactionType`<sup>Required</sup> <a name="PartnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerTransactionType"></a>

```go
func PartnerTransactionType() *string
```

- *Type:* *string

---

##### `PaygPolicy`<sup>Required</sup> <a name="PaygPolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paygPolicy"></a>

```go
func PaygPolicy() *string
```

- *Type:* *string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentMethod"></a>

```go
func PaymentMethod() *string
```

- *Type:* *string

---

##### `PaymentNumber`<sup>Required</sup> <a name="PaymentNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentNumber"></a>

```go
func PaymentNumber() *string
```

- *Type:* *string

---

##### `PaymentTerm`<sup>Required</sup> <a name="PaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentTerm"></a>

```go
func PaymentTerm() DataOciOnesubscriptionSubscribedServicePaymentTermList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList">DataOciOnesubscriptionSubscribedServicePaymentTermList</a>

---

##### `PricePeriod`<sup>Required</sup> <a name="PricePeriod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricePeriod"></a>

```go
func PricePeriod() *string
```

- *Type:* *string

---

##### `PricingModel`<sup>Required</sup> <a name="PricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricingModel"></a>

```go
func PricingModel() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.product"></a>

```go
func Product() DataOciOnesubscriptionSubscribedServiceProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList">DataOciOnesubscriptionSubscribedServiceProductList</a>

---

##### `ProgramType`<sup>Required</sup> <a name="ProgramType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.programType"></a>

```go
func ProgramType() *string
```

- *Type:* *string

---

##### `PromoOrderLineId`<sup>Required</sup> <a name="PromoOrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoOrderLineId"></a>

```go
func PromoOrderLineId() *string
```

- *Type:* *string

---

##### `PromotionPricingType`<sup>Required</sup> <a name="PromotionPricingType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promotionPricingType"></a>

```go
func PromotionPricingType() *string
```

- *Type:* *string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoType"></a>

```go
func PromoType() *string
```

- *Type:* *string

---

##### `ProvisioningSource`<sup>Required</sup> <a name="ProvisioningSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provisioningSource"></a>

```go
func ProvisioningSource() *string
```

- *Type:* *string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.quantity"></a>

```go
func Quantity() *string
```

- *Type:* *string

---

##### `RateCardDiscountPercentage`<sup>Required</sup> <a name="RateCardDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCardDiscountPercentage"></a>

```go
func RateCardDiscountPercentage() *string
```

- *Type:* *string

---

##### `RateCards`<sup>Required</sup> <a name="RateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCards"></a>

```go
func RateCards() DataOciOnesubscriptionSubscribedServiceRateCardsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList">DataOciOnesubscriptionSubscribedServiceRateCardsList</a>

---

##### `RatecardType`<sup>Required</sup> <a name="RatecardType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.ratecardType"></a>

```go
func RatecardType() *string
```

- *Type:* *string

---

##### `RenewalOptyId`<sup>Required</sup> <a name="RenewalOptyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyId"></a>

```go
func RenewalOptyId() *string
```

- *Type:* *string

---

##### `RenewalOptyNumber`<sup>Required</sup> <a name="RenewalOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyNumber"></a>

```go
func RenewalOptyNumber() *string
```

- *Type:* *string

---

##### `RenewalOptyType`<sup>Required</sup> <a name="RenewalOptyType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyType"></a>

```go
func RenewalOptyType() *string
```

- *Type:* *string

---

##### `RenewedSubscribedServiceId`<sup>Required</sup> <a name="RenewedSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewedSubscribedServiceId"></a>

```go
func RenewedSubscribedServiceId() *string
```

- *Type:* *string

---

##### `ResellerAddress`<sup>Required</sup> <a name="ResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerAddress"></a>

```go
func ResellerAddress() DataOciOnesubscriptionSubscribedServiceResellerAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList">DataOciOnesubscriptionSubscribedServiceResellerAddressList</a>

---

##### `ResellerContact`<sup>Required</sup> <a name="ResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerContact"></a>

```go
func ResellerContact() DataOciOnesubscriptionSubscribedServiceResellerContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList">DataOciOnesubscriptionSubscribedServiceResellerContactList</a>

---

##### `ResellerCustomer`<sup>Required</sup> <a name="ResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerCustomer"></a>

```go
func ResellerCustomer() DataOciOnesubscriptionSubscribedServiceResellerCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList">DataOciOnesubscriptionSubscribedServiceResellerCustomerList</a>

---

##### `RevenueLineId`<sup>Required</sup> <a name="RevenueLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineId"></a>

```go
func RevenueLineId() *string
```

- *Type:* *string

---

##### `RevenueLineNumber`<sup>Required</sup> <a name="RevenueLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineNumber"></a>

```go
func RevenueLineNumber() *string
```

- *Type:* *string

---

##### `RevisedArrInLc`<sup>Required</sup> <a name="RevisedArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInLc"></a>

```go
func RevisedArrInLc() *string
```

- *Type:* *string

---

##### `RevisedArrInSc`<sup>Required</sup> <a name="RevisedArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInSc"></a>

```go
func RevisedArrInSc() *string
```

- *Type:* *string

---

##### `SalesAccountPartyId`<sup>Required</sup> <a name="SalesAccountPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesAccountPartyId"></a>

```go
func SalesAccountPartyId() *string
```

- *Type:* *string

---

##### `SalesChannel`<sup>Required</sup> <a name="SalesChannel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesChannel"></a>

```go
func SalesChannel() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `ServiceToAddress`<sup>Required</sup> <a name="ServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToAddress"></a>

```go
func ServiceToAddress() DataOciOnesubscriptionSubscribedServiceServiceToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList">DataOciOnesubscriptionSubscribedServiceServiceToAddressList</a>

---

##### `ServiceToContact`<sup>Required</sup> <a name="ServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToContact"></a>

```go
func ServiceToContact() DataOciOnesubscriptionSubscribedServiceServiceToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList">DataOciOnesubscriptionSubscribedServiceServiceToContactList</a>

---

##### `ServiceToCustomer`<sup>Required</sup> <a name="ServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToCustomer"></a>

```go
func ServiceToCustomer() DataOciOnesubscriptionSubscribedServiceServiceToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList">DataOciOnesubscriptionSubscribedServiceServiceToCustomerList</a>

---

##### `SoldToContact`<sup>Required</sup> <a name="SoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToContact"></a>

```go
func SoldToContact() DataOciOnesubscriptionSubscribedServiceSoldToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList">DataOciOnesubscriptionSubscribedServiceSoldToContactList</a>

---

##### `SoldToCustomer`<sup>Required</sup> <a name="SoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToCustomer"></a>

```go
func SoldToCustomer() DataOciOnesubscriptionSubscribedServiceSoldToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList">DataOciOnesubscriptionSubscribedServiceSoldToCustomerList</a>

---

##### `StartDateType`<sup>Required</sup> <a name="StartDateType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.startDateType"></a>

```go
func StartDateType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `SubscriptionSource`<sup>Required</sup> <a name="SubscriptionSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionSource"></a>

```go
func SubscriptionSource() *string
```

- *Type:* *string

---

##### `SystemArrInLc`<sup>Required</sup> <a name="SystemArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInLc"></a>

```go
func SystemArrInLc() *string
```

- *Type:* *string

---

##### `SystemArrInSc`<sup>Required</sup> <a name="SystemArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInSc"></a>

```go
func SystemArrInSc() *string
```

- *Type:* *string

---

##### `SystemAtrArrInLc`<sup>Required</sup> <a name="SystemAtrArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInLc"></a>

```go
func SystemAtrArrInLc() *string
```

- *Type:* *string

---

##### `SystemAtrArrInSc`<sup>Required</sup> <a name="SystemAtrArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInSc"></a>

```go
func SystemAtrArrInSc() *string
```

- *Type:* *string

---

##### `TermValue`<sup>Required</sup> <a name="TermValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValue"></a>

```go
func TermValue() *string
```

- *Type:* *string

---

##### `TermValueUom`<sup>Required</sup> <a name="TermValueUom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValueUom"></a>

```go
func TermValueUom() *string
```

- *Type:* *string

---

##### `TimeAgreementEnd`<sup>Required</sup> <a name="TimeAgreementEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeAgreementEnd"></a>

```go
func TimeAgreementEnd() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeCustomerConfig`<sup>Required</sup> <a name="TimeCustomerConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCustomerConfig"></a>

```go
func TimeCustomerConfig() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeMajorsetEnd`<sup>Required</sup> <a name="TimeMajorsetEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetEnd"></a>

```go
func TimeMajorsetEnd() *string
```

- *Type:* *string

---

##### `TimeMajorsetStart`<sup>Required</sup> <a name="TimeMajorsetStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetStart"></a>

```go
func TimeMajorsetStart() *string
```

- *Type:* *string

---

##### `TimePaymentExpiry`<sup>Required</sup> <a name="TimePaymentExpiry" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timePaymentExpiry"></a>

```go
func TimePaymentExpiry() *string
```

- *Type:* *string

---

##### `TimeProvisioned`<sup>Required</sup> <a name="TimeProvisioned" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeProvisioned"></a>

```go
func TimeProvisioned() *string
```

- *Type:* *string

---

##### `TimeServiceConfigurationEmailSent`<sup>Required</sup> <a name="TimeServiceConfigurationEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeServiceConfigurationEmailSent"></a>

```go
func TimeServiceConfigurationEmailSent() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TimeWelcomeEmailSent`<sup>Required</sup> <a name="TimeWelcomeEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeWelcomeEmailSent"></a>

```go
func TimeWelcomeEmailSent() *string
```

- *Type:* *string

---

##### `TotalValue`<sup>Required</sup> <a name="TotalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.totalValue"></a>

```go
func TotalValue() *string
```

- *Type:* *string

---

##### `TransactionExtensionId`<sup>Required</sup> <a name="TransactionExtensionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.transactionExtensionId"></a>

```go
func TransactionExtensionId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UsedAmount`<sup>Required</sup> <a name="UsedAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.usedAmount"></a>

```go
func UsedAmount() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubscribedServiceIdInput`<sup>Optional</sup> <a name="SubscribedServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceIdInput"></a>

```go
func SubscribedServiceIdInput() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceId"></a>

```go
func SubscribedServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionSubscribedServiceBillToAddress <a name="DataOciOnesubscriptionSubscribedServiceBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceBillToAddress {

}
```


### DataOciOnesubscriptionSubscribedServiceBillToAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation {

}
```


### DataOciOnesubscriptionSubscribedServiceBillToContact <a name="DataOciOnesubscriptionSubscribedServiceBillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceBillToContact {

}
```


### DataOciOnesubscriptionSubscribedServiceBillToCustomer <a name="DataOciOnesubscriptionSubscribedServiceBillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceBillToCustomer {

}
```


### DataOciOnesubscriptionSubscribedServiceCommitmentServices <a name="DataOciOnesubscriptionSubscribedServiceCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceCommitmentServices {

}
```


### DataOciOnesubscriptionSubscribedServiceConfig <a name="DataOciOnesubscriptionSubscribedServiceConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SubscribedServiceId: *string,
	Fields: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#subscribed_service_id DataOciOnesubscriptionSubscribedService#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#fields DataOciOnesubscriptionSubscribedService#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#id DataOciOnesubscriptionSubscribedService#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.subscribedServiceId"></a>

```go
SubscribedServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#subscribed_service_id DataOciOnesubscriptionSubscribedService#subscribed_service_id}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#fields DataOciOnesubscriptionSubscribedService#fields}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#id DataOciOnesubscriptionSubscribedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionSubscribedServiceEndUserAddress <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceEndUserAddress {

}
```


### DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation {

}
```


### DataOciOnesubscriptionSubscribedServiceEndUserContact <a name="DataOciOnesubscriptionSubscribedServiceEndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceEndUserContact {

}
```


### DataOciOnesubscriptionSubscribedServiceEndUserCustomer <a name="DataOciOnesubscriptionSubscribedServiceEndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceEndUserCustomer {

}
```


### DataOciOnesubscriptionSubscribedServicePaymentTerm <a name="DataOciOnesubscriptionSubscribedServicePaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServicePaymentTerm {

}
```


### DataOciOnesubscriptionSubscribedServiceProduct <a name="DataOciOnesubscriptionSubscribedServiceProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceProduct {

}
```


### DataOciOnesubscriptionSubscribedServiceRateCards <a name="DataOciOnesubscriptionSubscribedServiceRateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceRateCards {

}
```


### DataOciOnesubscriptionSubscribedServiceRateCardsCurrency <a name="DataOciOnesubscriptionSubscribedServiceRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency {

}
```


### DataOciOnesubscriptionSubscribedServiceRateCardsProduct <a name="DataOciOnesubscriptionSubscribedServiceRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceRateCardsProduct {

}
```


### DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers <a name="DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers {

}
```


### DataOciOnesubscriptionSubscribedServiceResellerAddress <a name="DataOciOnesubscriptionSubscribedServiceResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceResellerAddress {

}
```


### DataOciOnesubscriptionSubscribedServiceResellerAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation {

}
```


### DataOciOnesubscriptionSubscribedServiceResellerContact <a name="DataOciOnesubscriptionSubscribedServiceResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceResellerContact {

}
```


### DataOciOnesubscriptionSubscribedServiceResellerCustomer <a name="DataOciOnesubscriptionSubscribedServiceResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceResellerCustomer {

}
```


### DataOciOnesubscriptionSubscribedServiceServiceToAddress <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceServiceToAddress {

}
```


### DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation {

}
```


### DataOciOnesubscriptionSubscribedServiceServiceToContact <a name="DataOciOnesubscriptionSubscribedServiceServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceServiceToContact {

}
```


### DataOciOnesubscriptionSubscribedServiceServiceToCustomer <a name="DataOciOnesubscriptionSubscribedServiceServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceServiceToCustomer {

}
```


### DataOciOnesubscriptionSubscribedServiceSoldToContact <a name="DataOciOnesubscriptionSubscribedServiceSoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceSoldToContact {

}
```


### DataOciOnesubscriptionSubscribedServiceSoldToCustomer <a name="DataOciOnesubscriptionSubscribedServiceSoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

&dataocionesubscriptionsubscribedservice.DataOciOnesubscriptionSubscribedServiceSoldToCustomer {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionSubscribedServiceBillToAddressList <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceBillToAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceBillToAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceBillToAddressLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation">DataOciOnesubscriptionSubscribedServiceBillToAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.tcaLocationId"></a>

```go
func TcaLocationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceBillToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation">DataOciOnesubscriptionSubscribedServiceBillToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList">DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress">DataOciOnesubscriptionSubscribedServiceBillToAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.billSiteUseId"></a>

```go
func BillSiteUseId() *string
```

- *Type:* *string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isBillTo"></a>

```go
func IsBillTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isShipTo"></a>

```go
func IsShipTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.location"></a>

```go
func Location() DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList">DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.service2SiteUseId"></a>

```go
func Service2SiteUseId() *string
```

- *Type:* *string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```go
func TcaCustAcctSiteId() *string
```

- *Type:* *string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaPartySiteNumber"></a>

```go
func TcaPartySiteNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceBillToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress">DataOciOnesubscriptionSubscribedServiceBillToAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceBillToContactList <a name="DataOciOnesubscriptionSubscribedServiceBillToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceBillToContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceBillToContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceBillToContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact">DataOciOnesubscriptionSubscribedServiceBillToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceBillToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact">DataOciOnesubscriptionSubscribedServiceBillToContact</a>

---


### DataOciOnesubscriptionSubscribedServiceBillToCustomerList <a name="DataOciOnesubscriptionSubscribedServiceBillToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceBillToCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceBillToCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer">DataOciOnesubscriptionSubscribedServiceBillToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceBillToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer">DataOciOnesubscriptionSubscribedServiceBillToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServiceCommitmentServicesList <a name="DataOciOnesubscriptionSubscribedServiceCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceCommitmentServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceCommitmentServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.lineNetAmount">LineNetAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.quantity">Quantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices">DataOciOnesubscriptionSubscribedServiceCommitmentServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.availableAmount"></a>

```go
func AvailableAmount() *string
```

- *Type:* *string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```go
func FundedAllocationValue() *string
```

- *Type:* *string

---

##### `LineNetAmount`<sup>Required</sup> <a name="LineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.lineNetAmount"></a>

```go
func LineNetAmount() *string
```

- *Type:* *string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.quantity"></a>

```go
func Quantity() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceCommitmentServices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices">DataOciOnesubscriptionSubscribedServiceCommitmentServices</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressList <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceEndUserAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceEndUserAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.tcaLocationId"></a>

```go
func TcaLocationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress">DataOciOnesubscriptionSubscribedServiceEndUserAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.billSiteUseId"></a>

```go
func BillSiteUseId() *string
```

- *Type:* *string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isBillTo"></a>

```go
func IsBillTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isShipTo"></a>

```go
func IsShipTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.location"></a>

```go
func Location() DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.service2SiteUseId"></a>

```go
func Service2SiteUseId() *string
```

- *Type:* *string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaCustAcctSiteId"></a>

```go
func TcaCustAcctSiteId() *string
```

- *Type:* *string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaPartySiteNumber"></a>

```go
func TcaPartySiteNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceEndUserAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress">DataOciOnesubscriptionSubscribedServiceEndUserAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserContactList <a name="DataOciOnesubscriptionSubscribedServiceEndUserContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceEndUserContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceEndUserContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact">DataOciOnesubscriptionSubscribedServiceEndUserContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceEndUserContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact">DataOciOnesubscriptionSubscribedServiceEndUserContact</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserCustomerList <a name="DataOciOnesubscriptionSubscribedServiceEndUserCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceEndUserCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceEndUserCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer">DataOciOnesubscriptionSubscribedServiceEndUserCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceEndUserCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer">DataOciOnesubscriptionSubscribedServiceEndUserCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicePaymentTermList <a name="DataOciOnesubscriptionSubscribedServicePaymentTermList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServicePaymentTermList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServicePaymentTermList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference <a name="DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServicePaymentTermOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.isActive">IsActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm">DataOciOnesubscriptionSubscribedServicePaymentTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServicePaymentTerm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm">DataOciOnesubscriptionSubscribedServicePaymentTerm</a>

---


### DataOciOnesubscriptionSubscribedServiceProductList <a name="DataOciOnesubscriptionSubscribedServiceProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceProductOutputReference <a name="DataOciOnesubscriptionSubscribedServiceProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct">DataOciOnesubscriptionSubscribedServiceProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct">DataOciOnesubscriptionSubscribedServiceProduct</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency">DataOciOnesubscriptionSubscribedServiceRateCardsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.isoCode"></a>

```go
func IsoCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```go
func StdPrecision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceRateCardsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency">DataOciOnesubscriptionSubscribedServiceRateCardsCurrency</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceRateCardsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceRateCardsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceRateCardsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.discretionaryDiscountPercentage">DiscretionaryDiscountPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.isTier">IsTier</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.overagePrice">OveragePrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList">DataOciOnesubscriptionSubscribedServiceRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.rateCardTiers">RateCardTiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards">DataOciOnesubscriptionSubscribedServiceRateCards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.currency"></a>

```go
func Currency() DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList</a>

---

##### `DiscretionaryDiscountPercentage`<sup>Required</sup> <a name="DiscretionaryDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```go
func DiscretionaryDiscountPercentage() *string
```

- *Type:* *string

---

##### `IsTier`<sup>Required</sup> <a name="IsTier" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.isTier"></a>

```go
func IsTier() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.overagePrice"></a>

```go
func OveragePrice() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.product"></a>

```go
func Product() DataOciOnesubscriptionSubscribedServiceRateCardsProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList">DataOciOnesubscriptionSubscribedServiceRateCardsProductList</a>

---

##### `RateCardTiers`<sup>Required</sup> <a name="RateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.rateCardTiers"></a>

```go
func RateCardTiers() DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList</a>

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.subscribedServiceId"></a>

```go
func SubscribedServiceId() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceRateCards
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards">DataOciOnesubscriptionSubscribedServiceRateCards</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsProductList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceRateCardsProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceRateCardsProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct">DataOciOnesubscriptionSubscribedServiceRateCardsProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceRateCardsProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct">DataOciOnesubscriptionSubscribedServiceRateCardsProduct</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.overagePrice">OveragePrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.upToQuantity">UpToQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```go
func OveragePrice() *string
```

- *Type:* *string

---

##### `UpToQuantity`<sup>Required</sup> <a name="UpToQuantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```go
func UpToQuantity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressList <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceResellerAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceResellerAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceResellerAddressLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation">DataOciOnesubscriptionSubscribedServiceResellerAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.tcaLocationId"></a>

```go
func TcaLocationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceResellerAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation">DataOciOnesubscriptionSubscribedServiceResellerAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList">DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress">DataOciOnesubscriptionSubscribedServiceResellerAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.billSiteUseId"></a>

```go
func BillSiteUseId() *string
```

- *Type:* *string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isBillTo"></a>

```go
func IsBillTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isShipTo"></a>

```go
func IsShipTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.location"></a>

```go
func Location() DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList">DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.service2SiteUseId"></a>

```go
func Service2SiteUseId() *string
```

- *Type:* *string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaCustAcctSiteId"></a>

```go
func TcaCustAcctSiteId() *string
```

- *Type:* *string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaPartySiteNumber"></a>

```go
func TcaPartySiteNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceResellerAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress">DataOciOnesubscriptionSubscribedServiceResellerAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerContactList <a name="DataOciOnesubscriptionSubscribedServiceResellerContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceResellerContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceResellerContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceResellerContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact">DataOciOnesubscriptionSubscribedServiceResellerContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceResellerContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact">DataOciOnesubscriptionSubscribedServiceResellerContact</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerCustomerList <a name="DataOciOnesubscriptionSubscribedServiceResellerCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceResellerCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceResellerCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer">DataOciOnesubscriptionSubscribedServiceResellerCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceResellerCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer">DataOciOnesubscriptionSubscribedServiceResellerCustomer</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressList <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceServiceToAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceServiceToAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.tcaLocationId"></a>

```go
func TcaLocationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress">DataOciOnesubscriptionSubscribedServiceServiceToAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.billSiteUseId"></a>

```go
func BillSiteUseId() *string
```

- *Type:* *string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isBillTo"></a>

```go
func IsBillTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isShipTo"></a>

```go
func IsShipTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.location"></a>

```go
func Location() DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.service2SiteUseId"></a>

```go
func Service2SiteUseId() *string
```

- *Type:* *string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```go
func TcaCustAcctSiteId() *string
```

- *Type:* *string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaPartySiteNumber"></a>

```go
func TcaPartySiteNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceServiceToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress">DataOciOnesubscriptionSubscribedServiceServiceToAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToContactList <a name="DataOciOnesubscriptionSubscribedServiceServiceToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceServiceToContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceServiceToContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact">DataOciOnesubscriptionSubscribedServiceServiceToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceServiceToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact">DataOciOnesubscriptionSubscribedServiceServiceToContact</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToCustomerList <a name="DataOciOnesubscriptionSubscribedServiceServiceToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceServiceToCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceServiceToCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer">DataOciOnesubscriptionSubscribedServiceServiceToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceServiceToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer">DataOciOnesubscriptionSubscribedServiceServiceToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServiceSoldToContactList <a name="DataOciOnesubscriptionSubscribedServiceSoldToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceSoldToContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceSoldToContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact">DataOciOnesubscriptionSubscribedServiceSoldToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceSoldToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact">DataOciOnesubscriptionSubscribedServiceSoldToContact</a>

---


### DataOciOnesubscriptionSubscribedServiceSoldToCustomerList <a name="DataOciOnesubscriptionSubscribedServiceSoldToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceSoldToCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionSubscribedServiceSoldToCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionsubscribedservice"

dataocionesubscriptionsubscribedservice.NewDataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer">DataOciOnesubscriptionSubscribedServiceSoldToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```go
func TcaCustAccountNumber() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionSubscribedServiceSoldToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer">DataOciOnesubscriptionSubscribedServiceSoldToCustomer</a>

---



