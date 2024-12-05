# `dataOciOnesubscriptionInvoices` Submodule <a name="`dataOciOnesubscriptionInvoices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionInvoices <a name="DataOciOnesubscriptionInvoices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices oci_onesubscription_invoices}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoices(scope Construct, id *string, config DataOciOnesubscriptionInvoicesConfig) DataOciOnesubscriptionInvoices
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig">DataOciOnesubscriptionInvoicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig">DataOciOnesubscriptionInvoicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetTimeFrom">ResetTimeFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetTimeTo">ResetTimeTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetFields"></a>

```go
func ResetFields()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeFrom` <a name="ResetTimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetTimeFrom"></a>

```go
func ResetTimeFrom()
```

##### `ResetTimeTo` <a name="ResetTimeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetTimeTo"></a>

```go
func ResetTimeTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionInvoices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoices_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoices_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoices_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoices_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOnesubscriptionInvoices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOnesubscriptionInvoices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOnesubscriptionInvoices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionInvoices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList">DataOciOnesubscriptionInvoicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.invoices">Invoices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList">DataOciOnesubscriptionInvoicesInvoicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.arCustomerTransactionIdInput">ArCustomerTransactionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeFromInput">TimeFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeToInput">TimeToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.arCustomerTransactionId">ArCustomerTransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeFrom">TimeFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeTo">TimeTo</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.filter"></a>

```go
func Filter() DataOciOnesubscriptionInvoicesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList">DataOciOnesubscriptionInvoicesFilterList</a>

---

##### `Invoices`<sup>Required</sup> <a name="Invoices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.invoices"></a>

```go
func Invoices() DataOciOnesubscriptionInvoicesInvoicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList">DataOciOnesubscriptionInvoicesInvoicesList</a>

---

##### `ArCustomerTransactionIdInput`<sup>Optional</sup> <a name="ArCustomerTransactionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.arCustomerTransactionIdInput"></a>

```go
func ArCustomerTransactionIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeFromInput`<sup>Optional</sup> <a name="TimeFromInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeFromInput"></a>

```go
func TimeFromInput() *string
```

- *Type:* *string

---

##### `TimeToInput`<sup>Optional</sup> <a name="TimeToInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeToInput"></a>

```go
func TimeToInput() *string
```

- *Type:* *string

---

##### `ArCustomerTransactionId`<sup>Required</sup> <a name="ArCustomerTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.arCustomerTransactionId"></a>

```go
func ArCustomerTransactionId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TimeFrom`<sup>Required</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeFrom"></a>

```go
func TimeFrom() *string
```

- *Type:* *string

---

##### `TimeTo`<sup>Required</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeTo"></a>

```go
func TimeTo() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionInvoicesConfig <a name="DataOciOnesubscriptionInvoicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArCustomerTransactionId: *string,
	CompartmentId: *string,
	Fields: *[]*string,
	Filter: interface{},
	Id: *string,
	TimeFrom: *string,
	TimeTo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.arCustomerTransactionId">ArCustomerTransactionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#ar_customer_transaction_id DataOciOnesubscriptionInvoices#ar_customer_transaction_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#compartment_id DataOciOnesubscriptionInvoices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#fields DataOciOnesubscriptionInvoices#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#id DataOciOnesubscriptionInvoices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.timeFrom">TimeFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_from DataOciOnesubscriptionInvoices#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.timeTo">TimeTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_to DataOciOnesubscriptionInvoices#time_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArCustomerTransactionId`<sup>Required</sup> <a name="ArCustomerTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.arCustomerTransactionId"></a>

```go
ArCustomerTransactionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#ar_customer_transaction_id DataOciOnesubscriptionInvoices#ar_customer_transaction_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#compartment_id DataOciOnesubscriptionInvoices#compartment_id}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#fields DataOciOnesubscriptionInvoices#fields}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#filter DataOciOnesubscriptionInvoices#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#id DataOciOnesubscriptionInvoices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeFrom`<sup>Optional</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.timeFrom"></a>

```go
TimeFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_from DataOciOnesubscriptionInvoices#time_from}.

---

##### `TimeTo`<sup>Optional</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.timeTo"></a>

```go
TimeTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_to DataOciOnesubscriptionInvoices#time_to}.

---

### DataOciOnesubscriptionInvoicesFilter <a name="DataOciOnesubscriptionInvoicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#name DataOciOnesubscriptionInvoices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#values DataOciOnesubscriptionInvoices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#regex DataOciOnesubscriptionInvoices#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#name DataOciOnesubscriptionInvoices#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#values DataOciOnesubscriptionInvoices#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#regex DataOciOnesubscriptionInvoices#regex}.

---

### DataOciOnesubscriptionInvoicesInvoices <a name="DataOciOnesubscriptionInvoicesInvoices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoices {

}
```


### DataOciOnesubscriptionInvoicesInvoicesBillToAddress <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress {

}
```


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation {

}
```


### DataOciOnesubscriptionInvoicesInvoicesBillToContact <a name="DataOciOnesubscriptionInvoicesInvoicesBillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact {

}
```


### DataOciOnesubscriptionInvoicesInvoicesBillToCustomer <a name="DataOciOnesubscriptionInvoicesInvoicesBillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer {

}
```


### DataOciOnesubscriptionInvoicesInvoicesCurrency <a name="DataOciOnesubscriptionInvoicesInvoicesCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency {

}
```


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLines <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLines" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines {

}
```


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct {

}
```


### DataOciOnesubscriptionInvoicesInvoicesOrganization <a name="DataOciOnesubscriptionInvoicesInvoicesOrganization" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization {

}
```


### DataOciOnesubscriptionInvoicesInvoicesPaymentTerm <a name="DataOciOnesubscriptionInvoicesInvoicesPaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

&dataocionesubscriptioninvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionInvoicesFilterList <a name="DataOciOnesubscriptionInvoicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOnesubscriptionInvoicesFilterOutputReference <a name="DataOciOnesubscriptionInvoicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressList <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesBillToAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesBillToAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation">DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.tcaLocationId"></a>

```go
func TcaLocationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation">DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation</a>

---


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList">DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress">DataOciOnesubscriptionInvoicesInvoicesBillToAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.billSiteUseId"></a>

```go
func BillSiteUseId() *string
```

- *Type:* *string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.isBillTo"></a>

```go
func IsBillTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.isShipTo"></a>

```go
func IsShipTo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.location"></a>

```go
func Location() DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList">DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.service2SiteUseId"></a>

```go
func Service2SiteUseId() *string
```

- *Type:* *string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```go
func TcaCustAcctSiteId() *string
```

- *Type:* *string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.tcaPartySiteNumber"></a>

```go
func TcaPartySiteNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoicesBillToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress">DataOciOnesubscriptionInvoicesInvoicesBillToAddress</a>

---


### DataOciOnesubscriptionInvoicesInvoicesBillToContactList <a name="DataOciOnesubscriptionInvoicesInvoicesBillToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesBillToContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesBillToContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact">DataOciOnesubscriptionInvoicesInvoicesBillToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaContactId"></a>

```go
func TcaContactId() *string
```

- *Type:* *string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaCustAccntSiteId"></a>

```go
func TcaCustAccntSiteId() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoicesBillToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact">DataOciOnesubscriptionInvoicesInvoicesBillToContact</a>

---


### DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList <a name="DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesBillToCustomerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaCustomerAccountNumber">TcaCustomerAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer">DataOciOnesubscriptionInvoicesInvoicesBillToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.customerChainType"></a>

```go
func CustomerChainType() *string
```

- *Type:* *string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.isChainCustomer"></a>

```go
func IsChainCustomer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.isPublicSector"></a>

```go
func IsPublicSector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.namePhonetic"></a>

```go
func NamePhonetic() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```go
func TcaCustomerAccountId() *string
```

- *Type:* *string

---

##### `TcaCustomerAccountNumber`<sup>Required</sup> <a name="TcaCustomerAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaCustomerAccountNumber"></a>

```go
func TcaCustomerAccountNumber() *string
```

- *Type:* *string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaPartyId"></a>

```go
func TcaPartyId() *string
```

- *Type:* *string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaPartyNumber"></a>

```go
func TcaPartyNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoicesBillToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer">DataOciOnesubscriptionInvoicesInvoicesBillToCustomer</a>

---


### DataOciOnesubscriptionInvoicesInvoicesCurrencyList <a name="DataOciOnesubscriptionInvoicesInvoicesCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesCurrencyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesCurrencyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency">DataOciOnesubscriptionInvoicesInvoicesCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.isoCode"></a>

```go
func IsoCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.stdPrecision"></a>

```go
func StdPrecision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoicesCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency">DataOciOnesubscriptionInvoicesInvoicesCurrency</a>

---


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.arInvoiceNumber">ArInvoiceNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.dataCenter">DataCenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines">DataOciOnesubscriptionInvoicesInvoicesInvoiceLines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArInvoiceNumber`<sup>Required</sup> <a name="ArInvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.arInvoiceNumber"></a>

```go
func ArInvoiceNumber() *string
```

- *Type:* *string

---

##### `DataCenter`<sup>Required</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.dataCenter"></a>

```go
func DataCenter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.product"></a>

```go
func Product() DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList</a>

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoicesInvoiceLines
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines">DataOciOnesubscriptionInvoicesInvoicesInvoiceLines</a>

---


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct</a>

---


### DataOciOnesubscriptionInvoicesInvoicesList <a name="DataOciOnesubscriptionInvoicesInvoicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesOrganizationList <a name="DataOciOnesubscriptionInvoicesInvoicesOrganizationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesOrganizationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesOrganizationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization">DataOciOnesubscriptionInvoicesInvoicesOrganization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoicesOrganization
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization">DataOciOnesubscriptionInvoicesInvoicesOrganization</a>

---


### DataOciOnesubscriptionInvoicesInvoicesOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.arInvoices">ArInvoices</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToAddress">BillToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList">DataOciOnesubscriptionInvoicesInvoicesBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToContact">BillToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList">DataOciOnesubscriptionInvoicesInvoicesBillToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToCustomer">BillToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList">DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList">DataOciOnesubscriptionInvoicesInvoicesCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.invoiceLines">InvoiceLines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.organization">Organization</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList">DataOciOnesubscriptionInvoicesInvoicesOrganizationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.paymentTerm">PaymentTerm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList">DataOciOnesubscriptionInvoicesInvoicesPaymentTermList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.receiptMethod">ReceiptMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.spmInvoiceNumber">SpmInvoiceNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.subscriptionNumber">SubscriptionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeInvoiceDate">TimeInvoiceDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoices">DataOciOnesubscriptionInvoicesInvoices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArInvoices`<sup>Required</sup> <a name="ArInvoices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.arInvoices"></a>

```go
func ArInvoices() *string
```

- *Type:* *string

---

##### `BillToAddress`<sup>Required</sup> <a name="BillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToAddress"></a>

```go
func BillToAddress() DataOciOnesubscriptionInvoicesInvoicesBillToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList">DataOciOnesubscriptionInvoicesInvoicesBillToAddressList</a>

---

##### `BillToContact`<sup>Required</sup> <a name="BillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToContact"></a>

```go
func BillToContact() DataOciOnesubscriptionInvoicesInvoicesBillToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList">DataOciOnesubscriptionInvoicesInvoicesBillToContactList</a>

---

##### `BillToCustomer`<sup>Required</sup> <a name="BillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToCustomer"></a>

```go
func BillToCustomer() DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList">DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.currency"></a>

```go
func Currency() DataOciOnesubscriptionInvoicesInvoicesCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList">DataOciOnesubscriptionInvoicesInvoicesCurrencyList</a>

---

##### `InvoiceLines`<sup>Required</sup> <a name="InvoiceLines" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.invoiceLines"></a>

```go
func InvoiceLines() DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList</a>

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.organization"></a>

```go
func Organization() DataOciOnesubscriptionInvoicesInvoicesOrganizationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList">DataOciOnesubscriptionInvoicesInvoicesOrganizationList</a>

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.paymentMethod"></a>

```go
func PaymentMethod() *string
```

- *Type:* *string

---

##### `PaymentTerm`<sup>Required</sup> <a name="PaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.paymentTerm"></a>

```go
func PaymentTerm() DataOciOnesubscriptionInvoicesInvoicesPaymentTermList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList">DataOciOnesubscriptionInvoicesInvoicesPaymentTermList</a>

---

##### `ReceiptMethod`<sup>Required</sup> <a name="ReceiptMethod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.receiptMethod"></a>

```go
func ReceiptMethod() *string
```

- *Type:* *string

---

##### `SpmInvoiceNumber`<sup>Required</sup> <a name="SpmInvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.spmInvoiceNumber"></a>

```go
func SpmInvoiceNumber() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubscriptionNumber`<sup>Required</sup> <a name="SubscriptionNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.subscriptionNumber"></a>

```go
func SubscriptionNumber() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeInvoiceDate`<sup>Required</sup> <a name="TimeInvoiceDate" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeInvoiceDate"></a>

```go
func TimeInvoiceDate() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoices">DataOciOnesubscriptionInvoicesInvoices</a>

---


### DataOciOnesubscriptionInvoicesInvoicesPaymentTermList <a name="DataOciOnesubscriptionInvoicesInvoicesPaymentTermList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesPaymentTermList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoicesInvoicesPaymentTermList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoices"

dataocionesubscriptioninvoices.NewDataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.isActive">IsActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm">DataOciOnesubscriptionInvoicesInvoicesPaymentTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoicesInvoicesPaymentTerm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm">DataOciOnesubscriptionInvoicesInvoicesPaymentTerm</a>

---



