# `dataOciOspGatewayInvoicesInvoiceLine` Submodule <a name="`dataOciOspGatewayInvoicesInvoiceLine` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoicesInvoiceLine <a name="DataOciOspGatewayInvoicesInvoiceLine" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line oci_osp_gateway_invoices_invoice_line}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.internalInvoiceId">internal_invoice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}.

---

##### `internal_invoice_id`<sup>Required</sup> <a name="internal_invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.internalInvoiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.ospHomeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOspGatewayInvoicesInvoiceLine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOspGatewayInvoicesInvoiceLine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoicesInvoiceLine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList">DataOciOspGatewayInvoicesInvoiceLineItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceIdInput">internal_invoice_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegionInput">osp_home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceId">internal_invoice_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.items"></a>

```python
items: DataOciOspGatewayInvoicesInvoiceLineItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList">DataOciOspGatewayInvoicesInvoiceLineItemsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_invoice_id_input`<sup>Optional</sup> <a name="internal_invoice_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceIdInput"></a>

```python
internal_invoice_id_input: str
```

- *Type:* str

---

##### `osp_home_region_input`<sup>Optional</sup> <a name="osp_home_region_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegionInput"></a>

```python
osp_home_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_invoice_id`<sup>Required</sup> <a name="internal_invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceId"></a>

```python
internal_invoice_id: str
```

- *Type:* str

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesInvoiceLineConfig <a name="DataOciOspGatewayInvoicesInvoiceLineConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig(
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
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.internalInvoiceId">internal_invoice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}.

---

##### `internal_invoice_id`<sup>Required</sup> <a name="internal_invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.internalInvoiceId"></a>

```python
internal_invoice_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayInvoicesInvoiceLineItems <a name="DataOciOspGatewayInvoicesInvoiceLineItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems()
```


### DataOciOspGatewayInvoicesInvoiceLineItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencySymbol">currency_symbol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.roundDecimalPoint">round_decimal_point</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.usdConversion">usd_conversion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency">DataOciOspGatewayInvoicesInvoiceLineItemsCurrency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `currency_symbol`<sup>Required</sup> <a name="currency_symbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencySymbol"></a>

```python
currency_symbol: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `round_decimal_point`<sup>Required</sup> <a name="round_decimal_point" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```python
round_decimal_point: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usd_conversion`<sup>Required</sup> <a name="usd_conversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.usdConversion"></a>

```python
usd_conversion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceLineItemsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency">DataOciOspGatewayInvoicesInvoiceLineItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceLineItemsList <a name="DataOciOspGatewayInvoicesInvoiceLineItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices_invoice_line

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.orderNo">order_no</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.quantity">quantity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.totalPrice">total_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems">DataOciOspGatewayInvoicesInvoiceLineItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.currency"></a>

```python
currency: DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList</a>

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_no`<sup>Required</sup> <a name="order_no" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.orderNo"></a>

```python
order_no: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.quantity"></a>

```python
quantity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `total_price`<sup>Required</sup> <a name="total_price" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.totalPrice"></a>

```python
total_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceLineItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems">DataOciOspGatewayInvoicesInvoiceLineItems</a>

---



