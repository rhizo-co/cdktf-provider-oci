# `dataOciOspGatewayInvoicesInvoiceLines` Submodule <a name="`dataOciOspGatewayInvoicesInvoiceLines` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoicesInvoiceLines <a name="DataOciOspGatewayInvoicesInvoiceLines" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines oci_osp_gateway_invoices_invoice_lines}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  internal_invoice_id: str,
  osp_home_region: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesInvoiceLinesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#compartment_id DataOciOspGatewayInvoicesInvoiceLines#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.internalInvoiceId">internal_invoice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLines#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#osp_home_region DataOciOspGatewayInvoicesInvoiceLines#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#id DataOciOspGatewayInvoicesInvoiceLines#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#compartment_id DataOciOspGatewayInvoicesInvoiceLines#compartment_id}.

---

##### `internal_invoice_id`<sup>Required</sup> <a name="internal_invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.internalInvoiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLines#internal_invoice_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.ospHomeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#osp_home_region DataOciOspGatewayInvoicesInvoiceLines#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#filter DataOciOspGatewayInvoicesInvoiceLines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#id DataOciOspGatewayInvoicesInvoiceLines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesInvoiceLinesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLines resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOspGatewayInvoicesInvoiceLines to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOspGatewayInvoicesInvoiceLines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoicesInvoiceLines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList">DataOciOspGatewayInvoicesInvoiceLinesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.invoiceLineCollection">invoice_line_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.internalInvoiceIdInput">internal_invoice_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.ospHomeRegionInput">osp_home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.internalInvoiceId">internal_invoice_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.filter"></a>

```python
filter: DataOciOspGatewayInvoicesInvoiceLinesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList">DataOciOspGatewayInvoicesInvoiceLinesFilterList</a>

---

##### `invoice_line_collection`<sup>Required</sup> <a name="invoice_line_collection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.invoiceLineCollection"></a>

```python
invoice_line_collection: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesInvoiceLinesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_invoice_id_input`<sup>Optional</sup> <a name="internal_invoice_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.internalInvoiceIdInput"></a>

```python
internal_invoice_id_input: str
```

- *Type:* str

---

##### `osp_home_region_input`<sup>Optional</sup> <a name="osp_home_region_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.ospHomeRegionInput"></a>

```python
osp_home_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_invoice_id`<sup>Required</sup> <a name="internal_invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.internalInvoiceId"></a>

```python
internal_invoice_id: str
```

- *Type:* str

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLines.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesInvoiceLinesConfig <a name="DataOciOspGatewayInvoicesInvoiceLinesConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  internal_invoice_id: str,
  osp_home_region: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesInvoiceLinesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#compartment_id DataOciOspGatewayInvoicesInvoiceLines#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.internalInvoiceId">internal_invoice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLines#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#osp_home_region DataOciOspGatewayInvoicesInvoiceLines#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#id DataOciOspGatewayInvoicesInvoiceLines#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#compartment_id DataOciOspGatewayInvoicesInvoiceLines#compartment_id}.

---

##### `internal_invoice_id`<sup>Required</sup> <a name="internal_invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.internalInvoiceId"></a>

```python
internal_invoice_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLines#internal_invoice_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#osp_home_region DataOciOspGatewayInvoicesInvoiceLines#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesInvoiceLinesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#filter DataOciOspGatewayInvoicesInvoiceLines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#id DataOciOspGatewayInvoicesInvoiceLines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayInvoicesInvoiceLinesFilter <a name="DataOciOspGatewayInvoicesInvoiceLinesFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#name DataOciOspGatewayInvoicesInvoiceLines#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#values DataOciOspGatewayInvoicesInvoiceLines#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#regex DataOciOspGatewayInvoicesInvoiceLines#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#name DataOciOspGatewayInvoicesInvoiceLines#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#values DataOciOspGatewayInvoicesInvoiceLines#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#regex DataOciOspGatewayInvoicesInvoiceLines#regex}.

---

### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection()
```


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems()
```


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesInvoiceLinesFilterList <a name="DataOciOspGatewayInvoicesInvoiceLinesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesInvoiceLinesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]]

---


### DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOspGatewayInvoicesInvoiceLinesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesFilter">DataOciOspGatewayInvoicesInvoiceLinesFilter</a>]

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.currencySymbol">currency_symbol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.roundDecimalPoint">round_decimal_point</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.usdConversion">usd_conversion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `currency_symbol`<sup>Required</sup> <a name="currency_symbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.currencySymbol"></a>

```python
currency_symbol: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `round_decimal_point`<sup>Required</sup> <a name="round_decimal_point" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```python
round_decimal_point: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usd_conversion`<sup>Required</sup> <a name="usd_conversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.usdConversion"></a>

```python
usd_conversion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.orderNo">order_no</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.quantity">quantity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.totalPrice">total_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.currency"></a>

```python
currency: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList</a>

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_no`<sup>Required</sup> <a name="order_no" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.orderNo"></a>

```python
order_no: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.quantity"></a>

```python
quantity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `total_price`<sup>Required</sup> <a name="total_price" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.totalPrice"></a>

```python
total_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems</a>

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_lines

dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.items"></a>

```python
items: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLines.DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection">DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection</a>

---



