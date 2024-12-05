# `opsiOperationsInsightsWarehouseDownloadWarehouseWallet` Submodule <a name="`opsiOperationsInsightsWarehouseDownloadWarehouseWallet` Submodule" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOperationsInsightsWarehouseDownloadWarehouseWallet <a name="OpsiOperationsInsightsWarehouseDownloadWarehouseWallet" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet oci_opsi_operations_insights_warehouse_download_warehouse_wallet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse_download_warehouse_wallet

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  operations_insights_warehouse_id: str,
  operations_insights_warehouse_wallet_password: str,
  id: str = None,
  timeouts: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.operationsInsightsWarehouseWalletPassword">operations_insights_warehouse_wallet_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_wallet_password OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.operationsInsightsWarehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_id}.

---

##### `operations_insights_warehouse_wallet_password`<sup>Required</sup> <a name="operations_insights_warehouse_wallet_password" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.operationsInsightsWarehouseWalletPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_wallet_password OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_wallet_password}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#timeouts OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#create OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#delete OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#update OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseDownloadWarehouseWallet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse_download_warehouse_wallet

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse_download_warehouse_wallet

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse_download_warehouse_wallet

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse_download_warehouse_wallet

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseDownloadWarehouseWallet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpsiOperationsInsightsWarehouseDownloadWarehouseWallet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpsiOperationsInsightsWarehouseDownloadWarehouseWallet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOperationsInsightsWarehouseDownloadWarehouseWallet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseIdInput">operations_insights_warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseWalletPasswordInput">operations_insights_warehouse_wallet_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseWalletPassword">operations_insights_warehouse_wallet_password</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.timeouts"></a>

```python
timeouts: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `operations_insights_warehouse_id_input`<sup>Optional</sup> <a name="operations_insights_warehouse_id_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseIdInput"></a>

```python
operations_insights_warehouse_id_input: str
```

- *Type:* str

---

##### `operations_insights_warehouse_wallet_password_input`<sup>Optional</sup> <a name="operations_insights_warehouse_wallet_password_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseWalletPasswordInput"></a>

```python
operations_insights_warehouse_wallet_password_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseId"></a>

```python
operations_insights_warehouse_id: str
```

- *Type:* str

---

##### `operations_insights_warehouse_wallet_password`<sup>Required</sup> <a name="operations_insights_warehouse_wallet_password" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseWalletPassword"></a>

```python
operations_insights_warehouse_wallet_password: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig <a name="OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse_download_warehouse_wallet

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  operations_insights_warehouse_id: str,
  operations_insights_warehouse_wallet_password: str,
  id: str = None,
  timeouts: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.operationsInsightsWarehouseWalletPassword">operations_insights_warehouse_wallet_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_wallet_password OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.operationsInsightsWarehouseId"></a>

```python
operations_insights_warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_id}.

---

##### `operations_insights_warehouse_wallet_password`<sup>Required</sup> <a name="operations_insights_warehouse_wallet_password" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.operationsInsightsWarehouseWalletPassword"></a>

```python
operations_insights_warehouse_wallet_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_wallet_password OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_wallet_password}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.timeouts"></a>

```python
timeouts: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#timeouts OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#timeouts}

---

### OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts <a name="OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse_download_warehouse_wallet

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#create OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#delete OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#update OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#create OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#delete OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#update OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference <a name="OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse_download_warehouse_wallet

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>]

---



