# `dataOciOspGatewayInvoicesInvoiceLine` Submodule <a name="`dataOciOspGatewayInvoicesInvoiceLine` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoicesInvoiceLine <a name="DataOciOspGatewayInvoicesInvoiceLine" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line oci_osp_gateway_invoices_invoice_line}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

dataociospgatewayinvoicesinvoiceline.NewDataOciOspGatewayInvoicesInvoiceLine(scope Construct, id *string, config DataOciOspGatewayInvoicesInvoiceLineConfig) DataOciOspGatewayInvoicesInvoiceLine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig">DataOciOspGatewayInvoicesInvoiceLineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig">DataOciOspGatewayInvoicesInvoiceLineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

dataociospgatewayinvoicesinvoiceline.DataOciOspGatewayInvoicesInvoiceLine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

dataociospgatewayinvoicesinvoiceline.DataOciOspGatewayInvoicesInvoiceLine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

dataociospgatewayinvoicesinvoiceline.DataOciOspGatewayInvoicesInvoiceLine_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

dataociospgatewayinvoicesinvoiceline.DataOciOspGatewayInvoicesInvoiceLine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOspGatewayInvoicesInvoiceLine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOspGatewayInvoicesInvoiceLine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoicesInvoiceLine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList">DataOciOspGatewayInvoicesInvoiceLineItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceIdInput">InternalInvoiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceId">InternalInvoiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.items"></a>

```go
func Items() DataOciOspGatewayInvoicesInvoiceLineItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList">DataOciOspGatewayInvoicesInvoiceLineItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternalInvoiceIdInput`<sup>Optional</sup> <a name="InternalInvoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceIdInput"></a>

```go
func InternalInvoiceIdInput() *string
```

- *Type:* *string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegionInput"></a>

```go
func OspHomeRegionInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalInvoiceId`<sup>Required</sup> <a name="InternalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceId"></a>

```go
func InternalInvoiceId() *string
```

- *Type:* *string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegion"></a>

```go
func OspHomeRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesInvoiceLineConfig <a name="DataOciOspGatewayInvoicesInvoiceLineConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

&dataociospgatewayinvoicesinvoiceline.DataOciOspGatewayInvoicesInvoiceLineConfig {
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
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.internalInvoiceId">InternalInvoiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}.

---

##### `InternalInvoiceId`<sup>Required</sup> <a name="InternalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.internalInvoiceId"></a>

```go
InternalInvoiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.ospHomeRegion"></a>

```go
OspHomeRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayInvoicesInvoiceLineItems <a name="DataOciOspGatewayInvoicesInvoiceLineItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

&dataociospgatewayinvoicesinvoiceline.DataOciOspGatewayInvoicesInvoiceLineItems {

}
```


### DataOciOspGatewayInvoicesInvoiceLineItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

&dataociospgatewayinvoicesinvoiceline.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

dataociospgatewayinvoicesinvoiceline.NewDataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get"></a>

```go
func Get(index *f64) DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

dataociospgatewayinvoicesinvoiceline.NewDataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencySymbol">CurrencySymbol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.roundDecimalPoint">RoundDecimalPoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.usdConversion">UsdConversion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency">DataOciOspGatewayInvoicesInvoiceLineItemsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `CurrencySymbol`<sup>Required</sup> <a name="CurrencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencySymbol"></a>

```go
func CurrencySymbol() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoundDecimalPoint`<sup>Required</sup> <a name="RoundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```go
func RoundDecimalPoint() *f64
```

- *Type:* *f64

---

##### `UsdConversion`<sup>Required</sup> <a name="UsdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.usdConversion"></a>

```go
func UsdConversion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewayInvoicesInvoiceLineItemsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency">DataOciOspGatewayInvoicesInvoiceLineItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceLineItemsList <a name="DataOciOspGatewayInvoicesInvoiceLineItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

dataociospgatewayinvoicesinvoiceline.NewDataOciOspGatewayInvoicesInvoiceLineItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewayInvoicesInvoiceLineItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get"></a>

```go
func Get(index *f64) DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewayinvoicesinvoiceline"

dataociospgatewayinvoicesinvoiceline.NewDataOciOspGatewayInvoicesInvoiceLineItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.orderNo">OrderNo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.quantity">Quantity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.totalPrice">TotalPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems">DataOciOspGatewayInvoicesInvoiceLineItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.currency"></a>

```go
func Currency() DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList</a>

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *f64
```

- *Type:* *f64

---

##### `OrderNo`<sup>Required</sup> <a name="OrderNo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.orderNo"></a>

```go
func OrderNo() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.quantity"></a>

```go
func Quantity() *f64
```

- *Type:* *f64

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `TotalPrice`<sup>Required</sup> <a name="TotalPrice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.totalPrice"></a>

```go
func TotalPrice() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewayInvoicesInvoiceLineItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems">DataOciOspGatewayInvoicesInvoiceLineItems</a>

---



