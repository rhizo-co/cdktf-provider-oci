# `dataOciOnesubscriptionInvoiceLineComputedUsages` Submodule <a name="`dataOciOnesubscriptionInvoiceLineComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsages <a name="DataOciOnesubscriptionInvoiceLineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages oci_onesubscription_invoice_line_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.NewDataOciOnesubscriptionInvoiceLineComputedUsages(scope Construct, id *string, config DataOciOnesubscriptionInvoiceLineComputedUsagesConfig) DataOciOnesubscriptionInvoiceLineComputedUsages
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig">DataOciOnesubscriptionInvoiceLineComputedUsagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig">DataOciOnesubscriptionInvoiceLineComputedUsagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFields"></a>

```go
func ResetFields()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionInvoiceLineComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.DataOciOnesubscriptionInvoiceLineComputedUsages_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.DataOciOnesubscriptionInvoiceLineComputedUsages_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.DataOciOnesubscriptionInvoiceLineComputedUsages_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.DataOciOnesubscriptionInvoiceLineComputedUsages_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOnesubscriptionInvoiceLineComputedUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOnesubscriptionInvoiceLineComputedUsages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOnesubscriptionInvoiceLineComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionInvoiceLineComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList">DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoicelineComputedUsages">InvoicelineComputedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineIdInput">InvoiceLineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineId">InvoiceLineId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filter"></a>

```go
func Filter() DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList">DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList</a>

---

##### `InvoicelineComputedUsages`<sup>Required</sup> <a name="InvoicelineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoicelineComputedUsages"></a>

```go
func InvoicelineComputedUsages() DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InvoiceLineIdInput`<sup>Optional</sup> <a name="InvoiceLineIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineIdInput"></a>

```go
func InvoiceLineIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InvoiceLineId`<sup>Required</sup> <a name="InvoiceLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineId"></a>

```go
func InvoiceLineId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsagesConfig <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

&dataocionesubscriptioninvoicelinecomputedusages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	InvoiceLineId: *string,
	Fields: *[]*string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.invoiceLineId">InvoiceLineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}.

---

##### `InvoiceLineId`<sup>Required</sup> <a name="InvoiceLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.invoiceLineId"></a>

```go
InvoiceLineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#filter DataOciOnesubscriptionInvoiceLineComputedUsages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionInvoiceLineComputedUsagesFilter <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

&dataocionesubscriptioninvoicelinecomputedusages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#name DataOciOnesubscriptionInvoiceLineComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#values DataOciOnesubscriptionInvoiceLineComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#regex DataOciOnesubscriptionInvoiceLineComputedUsages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#name DataOciOnesubscriptionInvoiceLineComputedUsages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#values DataOciOnesubscriptionInvoiceLineComputedUsages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#regex DataOciOnesubscriptionInvoiceLineComputedUsages#regex}.

---

### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

&dataocionesubscriptioninvoicelinecomputedusages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages {

}
```


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

&dataocionesubscriptioninvoicelinecomputedusages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct {

}
```


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

&dataocionesubscriptioninvoicelinecomputedusages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.NewDataOciOnesubscriptionInvoiceLineComputedUsagesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.NewDataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.NewDataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.NewDataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.cost">Cost</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.costRounded">CostRounded</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.parentProduct">ParentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.quantity">Quantity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.timeMeteredOn">TimeMeteredOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cost`<sup>Required</sup> <a name="Cost" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.cost"></a>

```go
func Cost() *f64
```

- *Type:* *f64

---

##### `CostRounded`<sup>Required</sup> <a name="CostRounded" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.costRounded"></a>

```go
func CostRounded() *f64
```

- *Type:* *f64

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *f64
```

- *Type:* *f64

---

##### `ParentProduct`<sup>Required</sup> <a name="ParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.parentProduct"></a>

```go
func ParentProduct() DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList</a>

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.product"></a>

```go
func Product() DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList</a>

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.quantity"></a>

```go
func Quantity() *f64
```

- *Type:* *f64

---

##### `TimeMeteredOn`<sup>Required</sup> <a name="TimeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.timeMeteredOn"></a>

```go
func TimeMeteredOn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.NewDataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.NewDataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.NewDataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptioninvoicelinecomputedusages"

dataocionesubscriptioninvoicelinecomputedusages.NewDataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct</a>

---



