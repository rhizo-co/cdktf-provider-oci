# `dataOciOspGatewayInvoicesInvoiceLines` Submodule <a name="`dataOciOspGatewayInvoicesInvoiceLines` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoicesInvoiceLines <a name="DataOciOspGatewayInvoicesInvoiceLines" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines oci_osp_gateway_invoices_invoice_lines}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.NewDataOciOspGatewayInvoicesInvoiceLines(scope Construct, id *string, config DataOciOspGatewayInvoicesInvoiceLinesConfig) DataOciOspGatewayInvoicesInvoiceLines
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig">DataOciOspGatewayInvoicesInvoiceLinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig">DataOciOspGatewayInvoicesInvoiceLinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLines resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.DataOciOspGatewayInvoicesInvoiceLines_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.DataOciOspGatewayInvoicesInvoiceLines_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.DataOciOspGatewayInvoicesInvoiceLines_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.DataOciOspGatewayInvoicesInvoiceLines_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOspGatewayInvoicesInvoiceLines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOspGatewayInvoicesInvoiceLines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoicesInvoiceLines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList">DataOciOspGatewayInvoicesInvoiceLinesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.invoiceLineCollection">InvoiceLineCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.internalInvoiceIdInput">InternalInvoiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.internalInvoiceId">InternalInvoiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.filter"></a>

```go
func Filter() DataOciOspGatewayInvoicesInvoiceLinesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList">DataOciOspGatewayInvoicesInvoiceLinesFilterList</a>

---

##### `InvoiceLineCollection`<sup>Required</sup> <a name="InvoiceLineCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.invoiceLineCollection"></a>

```go
func InvoiceLineCollection() DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternalInvoiceIdInput`<sup>Optional</sup> <a name="InternalInvoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.internalInvoiceIdInput"></a>

```go
func InternalInvoiceIdInput() *string
```

- *Type:* *string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.ospHomeRegionInput"></a>

```go
func OspHomeRegionInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalInvoiceId`<sup>Required</sup> <a name="InternalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.internalInvoiceId"></a>

```go
func InternalInvoiceId() *string
```

- *Type:* *string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.ospHomeRegion"></a>

```go
func OspHomeRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesInvoiceLinesConfig <a name="DataOciOspGatewayInvoicesInvoiceLinesConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

&dataociospgatewayinvoicesinvoicelines.DataOciOspGatewayInvoicesInvoiceLinesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	InternalInvoiceId: *string,
	OspHomeRegion: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#compartment_id DataOciOspGatewayInvoicesInvoiceLines#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.internalInvoiceId">InternalInvoiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLines#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#osp_home_region DataOciOspGatewayInvoicesInvoiceLines#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#id DataOciOspGatewayInvoicesInvoiceLines#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#compartment_id DataOciOspGatewayInvoicesInvoiceLines#compartment_id}.

---

##### `InternalInvoiceId`<sup>Required</sup> <a name="InternalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.internalInvoiceId"></a>

```go
InternalInvoiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLines#internal_invoice_id}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.ospHomeRegion"></a>

```go
OspHomeRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#osp_home_region DataOciOspGatewayInvoicesInvoiceLines#osp_home_region}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#filter DataOciOspGatewayInvoicesInvoiceLines#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#id DataOciOspGatewayInvoicesInvoiceLines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayInvoicesInvoiceLinesFilter <a name="DataOciOspGatewayInvoicesInvoiceLinesFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

&dataociospgatewayinvoicesinvoicelines.DataOciOspGatewayInvoicesInvoiceLinesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#name DataOciOspGatewayInvoicesInvoiceLines#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#values DataOciOspGatewayInvoicesInvoiceLines#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#regex DataOciOspGatewayInvoicesInvoiceLines#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#name DataOciOspGatewayInvoicesInvoiceLines#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#values DataOciOspGatewayInvoicesInvoiceLines#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#regex DataOciOspGatewayInvoicesInvoiceLines#regex}.

---

### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

&dataociospgatewayinvoicesinvoicelines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection {

}
```


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

&dataociospgatewayinvoicesinvoicelines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems {

}
```


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

&dataociospgatewayinvoicesinvoicelines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesInvoiceLinesFilterList <a name="DataOciOspGatewayInvoicesInvoiceLinesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.NewDataOciOspGatewayInvoicesInvoiceLinesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewayInvoicesInvoiceLinesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.get"></a>

```go
func Get(index *f64) DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.NewDataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.NewDataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.get"></a>

```go
func Get(index *f64) DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.NewDataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.currencySymbol">CurrencySymbol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.roundDecimalPoint">RoundDecimalPoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.usdConversion">UsdConversion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `CurrencySymbol`<sup>Required</sup> <a name="CurrencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.currencySymbol"></a>

```go
func CurrencySymbol() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoundDecimalPoint`<sup>Required</sup> <a name="RoundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```go
func RoundDecimalPoint() *f64
```

- *Type:* *f64

---

##### `UsdConversion`<sup>Required</sup> <a name="UsdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.usdConversion"></a>

```go
func UsdConversion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.NewDataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.NewDataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.orderNo">OrderNo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.quantity">Quantity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.totalPrice">TotalPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.currency"></a>

```go
func Currency() DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList</a>

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *f64
```

- *Type:* *f64

---

##### `OrderNo`<sup>Required</sup> <a name="OrderNo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.orderNo"></a>

```go
func OrderNo() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.quantity"></a>

```go
func Quantity() *f64
```

- *Type:* *f64

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `TotalPrice`<sup>Required</sup> <a name="TotalPrice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.totalPrice"></a>

```go
func TotalPrice() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems</a>

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.NewDataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.get"></a>

```go
func Get(index *f64) DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoicelines"

dataociospgatewayinvoicesinvoicelines.NewDataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection</a>

---



