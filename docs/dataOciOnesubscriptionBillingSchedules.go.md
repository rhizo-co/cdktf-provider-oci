# `dataOciOnesubscriptionBillingSchedules` Submodule <a name="`dataOciOnesubscriptionBillingSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionBillingSchedules <a name="DataOciOnesubscriptionBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules oci_onesubscription_billing_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.NewDataOciOnesubscriptionBillingSchedules(scope Construct, id *string, config DataOciOnesubscriptionBillingSchedulesConfig) DataOciOnesubscriptionBillingSchedules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig">DataOciOnesubscriptionBillingSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig">DataOciOnesubscriptionBillingSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetSubscribedServiceId">ResetSubscribedServiceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetId"></a>

```go
func ResetId()
```

##### `ResetSubscribedServiceId` <a name="ResetSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetSubscribedServiceId"></a>

```go
func ResetSubscribedServiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionBillingSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.DataOciOnesubscriptionBillingSchedules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.DataOciOnesubscriptionBillingSchedules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.DataOciOnesubscriptionBillingSchedules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.DataOciOnesubscriptionBillingSchedules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOnesubscriptionBillingSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOnesubscriptionBillingSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOnesubscriptionBillingSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionBillingSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.billingSchedules">BillingSchedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList">DataOciOnesubscriptionBillingSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceIdInput">SubscribedServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BillingSchedules`<sup>Required</sup> <a name="BillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.billingSchedules"></a>

```go
func BillingSchedules() DataOciOnesubscriptionBillingSchedulesBillingSchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filter"></a>

```go
func Filter() DataOciOnesubscriptionBillingSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList">DataOciOnesubscriptionBillingSchedulesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubscribedServiceIdInput`<sup>Optional</sup> <a name="SubscribedServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceIdInput"></a>

```go
func SubscribedServiceIdInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceId"></a>

```go
func SubscribedServiceId() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionBillingSchedulesBillingSchedules <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

&dataocionesubscriptionbillingschedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules {

}
```


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

&dataocionesubscriptionbillingschedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct {

}
```


### DataOciOnesubscriptionBillingSchedulesConfig <a name="DataOciOnesubscriptionBillingSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

&dataocionesubscriptionbillingschedules.DataOciOnesubscriptionBillingSchedulesConfig {
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
	SubscribedServiceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#filter DataOciOnesubscriptionBillingSchedules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SubscribedServiceId`<sup>Optional</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscribedServiceId"></a>

```go
SubscribedServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}.

---

### DataOciOnesubscriptionBillingSchedulesFilter <a name="DataOciOnesubscriptionBillingSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

&dataocionesubscriptionbillingschedules.DataOciOnesubscriptionBillingSchedulesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#name DataOciOnesubscriptionBillingSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#values DataOciOnesubscriptionBillingSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#regex DataOciOnesubscriptionBillingSchedules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#name DataOciOnesubscriptionBillingSchedules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#values DataOciOnesubscriptionBillingSchedules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#regex DataOciOnesubscriptionBillingSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionBillingSchedulesBillingSchedulesList <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.NewDataOciOnesubscriptionBillingSchedulesBillingSchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionBillingSchedulesBillingSchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.NewDataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.amount">Amount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId">ArCustomerTransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber">ArInvoiceNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency">BillingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus">InvoiceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.orderNumber">OrderNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.quantity">Quantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing">TimeInvoicing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules">DataOciOnesubscriptionBillingSchedulesBillingSchedules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.amount"></a>

```go
func Amount() *string
```

- *Type:* *string

---

##### `ArCustomerTransactionId`<sup>Required</sup> <a name="ArCustomerTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId"></a>

```go
func ArCustomerTransactionId() *string
```

- *Type:* *string

---

##### `ArInvoiceNumber`<sup>Required</sup> <a name="ArInvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber"></a>

```go
func ArInvoiceNumber() *string
```

- *Type:* *string

---

##### `BillingFrequency`<sup>Required</sup> <a name="BillingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency"></a>

```go
func BillingFrequency() *string
```

- *Type:* *string

---

##### `InvoiceStatus`<sup>Required</sup> <a name="InvoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus"></a>

```go
func InvoiceStatus() *string
```

- *Type:* *string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OrderNumber`<sup>Required</sup> <a name="OrderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.orderNumber"></a>

```go
func OrderNumber() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.product"></a>

```go
func Product() DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList</a>

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.quantity"></a>

```go
func Quantity() *string
```

- *Type:* *string

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.subscribedServiceId"></a>

```go
func SubscribedServiceId() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeInvoicing`<sup>Required</sup> <a name="TimeInvoicing" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing"></a>

```go
func TimeInvoicing() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionBillingSchedulesBillingSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules">DataOciOnesubscriptionBillingSchedulesBillingSchedules</a>

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.NewDataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.NewDataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct</a>

---


### DataOciOnesubscriptionBillingSchedulesFilterList <a name="DataOciOnesubscriptionBillingSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.NewDataOciOnesubscriptionBillingSchedulesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionBillingSchedulesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionBillingSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOnesubscriptionBillingSchedulesFilterOutputReference <a name="DataOciOnesubscriptionBillingSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionbillingschedules"

dataocionesubscriptionbillingschedules.NewDataOciOnesubscriptionBillingSchedulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionBillingSchedulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



