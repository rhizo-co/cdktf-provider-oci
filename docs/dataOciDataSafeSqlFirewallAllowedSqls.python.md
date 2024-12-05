# `dataOciDataSafeSqlFirewallAllowedSqls` Submodule <a name="`dataOciDataSafeSqlFirewallAllowedSqls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallAllowedSqls <a name="DataOciDataSafeSqlFirewallAllowedSqls" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls oci_data_safe_sql_firewall_allowed_sqls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls(
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
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlsFilter]] = None,
  id: str = None,
  scim_query: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id DataOciDataSafeSqlFirewallAllowedSqls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#access_level DataOciDataSafeSqlFirewallAllowedSqls#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqls#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#id DataOciDataSafeSqlFirewallAllowedSqls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.scimQuery">scim_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#scim_query DataOciDataSafeSqlFirewallAllowedSqls#scim_query}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id DataOciDataSafeSqlFirewallAllowedSqls#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#access_level DataOciDataSafeSqlFirewallAllowedSqls#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqls#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#filter DataOciDataSafeSqlFirewallAllowedSqls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#id DataOciDataSafeSqlFirewallAllowedSqls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_query`<sup>Optional</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.scimQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#scim_query DataOciDataSafeSqlFirewallAllowedSqls#scim_query}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetScimQuery">reset_scim_query</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scim_query` <a name="reset_scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetScimQuery"></a>

```python
def reset_scim_query() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqls resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSqlFirewallAllowedSqls to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSqlFirewallAllowedSqls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallAllowedSqls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList">DataOciDataSafeSqlFirewallAllowedSqlsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.sqlFirewallAllowedSqlCollection">sql_firewall_allowed_sql_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQueryInput">scim_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQuery">scim_query</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filter"></a>

```python
filter: DataOciDataSafeSqlFirewallAllowedSqlsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList">DataOciDataSafeSqlFirewallAllowedSqlsFilterList</a>

---

##### `sql_firewall_allowed_sql_collection`<sup>Required</sup> <a name="sql_firewall_allowed_sql_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.sqlFirewallAllowedSqlCollection"></a>

```python
sql_firewall_allowed_sql_collection: DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scim_query_input`<sup>Optional</sup> <a name="scim_query_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQueryInput"></a>

```python
scim_query_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scim_query`<sup>Required</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQuery"></a>

```python
scim_query: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlsConfig <a name="DataOciDataSafeSqlFirewallAllowedSqlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlsFilter]] = None,
  id: str = None,
  scim_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id DataOciDataSafeSqlFirewallAllowedSqls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#access_level DataOciDataSafeSqlFirewallAllowedSqls#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqls#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#id DataOciDataSafeSqlFirewallAllowedSqls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.scimQuery">scim_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#scim_query DataOciDataSafeSqlFirewallAllowedSqls#scim_query}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id DataOciDataSafeSqlFirewallAllowedSqls#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#access_level DataOciDataSafeSqlFirewallAllowedSqls#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqls#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#filter DataOciDataSafeSqlFirewallAllowedSqls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#id DataOciDataSafeSqlFirewallAllowedSqls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_query`<sup>Optional</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.scimQuery"></a>

```python
scim_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#scim_query DataOciDataSafeSqlFirewallAllowedSqls#scim_query}.

---

### DataOciDataSafeSqlFirewallAllowedSqlsFilter <a name="DataOciDataSafeSqlFirewallAllowedSqlsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#name DataOciDataSafeSqlFirewallAllowedSqls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#values DataOciDataSafeSqlFirewallAllowedSqls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#regex DataOciDataSafeSqlFirewallAllowedSqls#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#name DataOciDataSafeSqlFirewallAllowedSqls#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#values DataOciDataSafeSqlFirewallAllowedSqls#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#regex DataOciDataSafeSqlFirewallAllowedSqls#regex}.

---

### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection()
```


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallAllowedSqlsFilterList <a name="DataOciDataSafeSqlFirewallAllowedSqlsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]]

---


### DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSqlFirewallAllowedSqlsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>]

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.currentUser">current_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.dbUserName">db_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlAccessedObjects">sql_accessed_objects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlFirewallPolicyId">sql_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlLevel">sql_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlText">sql_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeCollected">time_collected</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `current_user`<sup>Required</sup> <a name="current_user" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.currentUser"></a>

```python
current_user: str
```

- *Type:* str

---

##### `db_user_name`<sup>Required</sup> <a name="db_user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.dbUserName"></a>

```python
db_user_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sql_accessed_objects`<sup>Required</sup> <a name="sql_accessed_objects" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlAccessedObjects"></a>

```python
sql_accessed_objects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_firewall_policy_id`<sup>Required</sup> <a name="sql_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlFirewallPolicyId"></a>

```python
sql_firewall_policy_id: str
```

- *Type:* str

---

##### `sql_level`<sup>Required</sup> <a name="sql_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlLevel"></a>

```python
sql_level: str
```

- *Type:* str

---

##### `sql_text`<sup>Required</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlText"></a>

```python
sql_text: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_collected`<sup>Required</sup> <a name="time_collected" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeCollected"></a>

```python
time_collected: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sqls

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection</a>

---



