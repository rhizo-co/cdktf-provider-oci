# `databasePluggableDatabasePluggabledatabasemanagementsManagement` Submodule <a name="`databasePluggableDatabasePluggabledatabasemanagementsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabasePluggabledatabasemanagementsManagement <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management oci_database_pluggable_database_pluggabledatabasemanagements_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credential_details: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails,
  enable_pluggabledatabasemanagement: typing.Union[bool, IResolvable],
  pluggable_database_id: str,
  private_end_point_id: str,
  service_name: str,
  id: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  role: str = None,
  ssl_secret_id: str = None,
  timeouts: DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.credentialDetails">credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.enablePluggabledatabasemanagement">enable_pluggabledatabasemanagement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#enable_pluggabledatabasemanagement DatabasePluggableDatabasePluggabledatabasemanagementsManagement#enable_pluggabledatabasemanagement}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#pluggable_database_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#private_end_point_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#private_end_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#service_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#port DatabasePluggableDatabasePluggabledatabasemanagementsManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#protocol DatabasePluggableDatabasePluggabledatabasemanagementsManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#role DatabasePluggableDatabasePluggabledatabasemanagementsManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#ssl_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credential_details`<sup>Required</sup> <a name="credential_details" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.credentialDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#credential_details DatabasePluggableDatabasePluggabledatabasemanagementsManagement#credential_details}

---

##### `enable_pluggabledatabasemanagement`<sup>Required</sup> <a name="enable_pluggabledatabasemanagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.enablePluggabledatabasemanagement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#enable_pluggabledatabasemanagement DatabasePluggableDatabasePluggabledatabasemanagementsManagement#enable_pluggabledatabasemanagement}.

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.pluggableDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#pluggable_database_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#pluggable_database_id}.

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.privateEndPointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#private_end_point_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#private_end_point_id}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#service_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#port DatabasePluggableDatabasePluggabledatabasemanagementsManagement#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#protocol DatabasePluggableDatabasePluggabledatabasemanagementsManagement#protocol}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#role DatabasePluggableDatabasePluggabledatabasemanagementsManagement#role}.

---

##### `ssl_secret_id`<sup>Optional</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.sslSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#ssl_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#ssl_secret_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#timeouts DatabasePluggableDatabasePluggabledatabasemanagementsManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putCredentialDetails">put_credential_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetSslSecretId">reset_ssl_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credential_details` <a name="put_credential_details" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putCredentialDetails"></a>

```python
def put_credential_details(
  password_secret_id: str,
  user_name: str
) -> None
```

###### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putCredentialDetails.parameter.passwordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#password_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#password_secret_id}.

---

###### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putCredentialDetails.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#user_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#user_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#create DatabasePluggableDatabasePluggabledatabasemanagementsManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#delete DatabasePluggableDatabasePluggabledatabasemanagementsManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#update DatabasePluggableDatabasePluggabledatabasemanagementsManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_role` <a name="reset_role" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_ssl_secret_id` <a name="reset_ssl_secret_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetSslSecretId"></a>

```python
def reset_ssl_secret_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabasePluggabledatabasemanagementsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabasePluggableDatabasePluggabledatabasemanagementsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabasePluggableDatabasePluggabledatabasemanagementsManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabasePluggableDatabasePluggabledatabasemanagementsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabasePluggabledatabasemanagementsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.containerDatabaseId">container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.credentialDetails">credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.isRestricted">is_restricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pdbName">pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseManagementConfig">pluggable_database_management_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.credentialDetailsInput">credential_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.enablePluggabledatabasemanagementInput">enable_pluggabledatabasemanagement_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseIdInput">pluggable_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.privateEndPointIdInput">private_end_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.sslSecretIdInput">ssl_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.enablePluggabledatabasemanagement">enable_pluggabledatabasemanagement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.connectionStrings"></a>

```python
connection_strings: DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList</a>

---

##### `container_database_id`<sup>Required</sup> <a name="container_database_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.containerDatabaseId"></a>

```python
container_database_id: str
```

- *Type:* str

---

##### `credential_details`<sup>Required</sup> <a name="credential_details" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.credentialDetails"></a>

```python
credential_details: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_restricted`<sup>Required</sup> <a name="is_restricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.isRestricted"></a>

```python
is_restricted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `pdb_name`<sup>Required</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

---

##### `pluggable_database_management_config`<sup>Required</sup> <a name="pluggable_database_management_config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseManagementConfig"></a>

```python
pluggable_database_management_config: DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeouts"></a>

```python
timeouts: DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference</a>

---

##### `credential_details_input`<sup>Optional</sup> <a name="credential_details_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.credentialDetailsInput"></a>

```python
credential_details_input: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a>

---

##### `enable_pluggabledatabasemanagement_input`<sup>Optional</sup> <a name="enable_pluggabledatabasemanagement_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.enablePluggabledatabasemanagementInput"></a>

```python
enable_pluggabledatabasemanagement_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pluggable_database_id_input`<sup>Optional</sup> <a name="pluggable_database_id_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseIdInput"></a>

```python
pluggable_database_id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_end_point_id_input`<sup>Optional</sup> <a name="private_end_point_id_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.privateEndPointIdInput"></a>

```python
private_end_point_id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `ssl_secret_id_input`<sup>Optional</sup> <a name="ssl_secret_id_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.sslSecretIdInput"></a>

```python
ssl_secret_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>]

---

##### `enable_pluggabledatabasemanagement`<sup>Required</sup> <a name="enable_pluggabledatabasemanagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.enablePluggabledatabasemanagement"></a>

```python
enable_pluggabledatabasemanagement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `ssl_secret_id`<sup>Required</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credential_details: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails,
  enable_pluggabledatabasemanagement: typing.Union[bool, IResolvable],
  pluggable_database_id: str,
  private_end_point_id: str,
  service_name: str,
  id: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  role: str = None,
  ssl_secret_id: str = None,
  timeouts: DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.credentialDetails">credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.enablePluggabledatabasemanagement">enable_pluggabledatabasemanagement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#enable_pluggabledatabasemanagement DatabasePluggableDatabasePluggabledatabasemanagementsManagement#enable_pluggabledatabasemanagement}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#pluggable_database_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#private_end_point_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#private_end_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#service_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#port DatabasePluggableDatabasePluggabledatabasemanagementsManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#protocol DatabasePluggableDatabasePluggabledatabasemanagementsManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#role DatabasePluggableDatabasePluggabledatabasemanagementsManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#ssl_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credential_details`<sup>Required</sup> <a name="credential_details" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.credentialDetails"></a>

```python
credential_details: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#credential_details DatabasePluggableDatabasePluggabledatabasemanagementsManagement#credential_details}

---

##### `enable_pluggabledatabasemanagement`<sup>Required</sup> <a name="enable_pluggabledatabasemanagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.enablePluggabledatabasemanagement"></a>

```python
enable_pluggabledatabasemanagement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#enable_pluggabledatabasemanagement DatabasePluggableDatabasePluggabledatabasemanagementsManagement#enable_pluggabledatabasemanagement}.

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#pluggable_database_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#pluggable_database_id}.

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#private_end_point_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#private_end_point_id}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#service_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#port DatabasePluggableDatabasePluggabledatabasemanagementsManagement#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#protocol DatabasePluggableDatabasePluggabledatabasemanagementsManagement#protocol}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#role DatabasePluggableDatabasePluggabledatabasemanagementsManagement#role}.

---

##### `ssl_secret_id`<sup>Optional</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#ssl_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#ssl_secret_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.timeouts"></a>

```python
timeouts: DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#timeouts DatabasePluggableDatabasePluggabledatabasemanagementsManagement#timeouts}

---

### DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings()
```


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails(
  password_secret_id: str,
  user_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#password_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#user_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#user_name}. |

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#password_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#password_secret_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#user_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#user_name}.

---

### DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig()
```


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#create DatabasePluggableDatabasePluggabledatabasemanagementsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#delete DatabasePluggableDatabasePluggabledatabasemanagementsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#update DatabasePluggableDatabasePluggabledatabasemanagementsManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#create DatabasePluggableDatabasePluggabledatabasemanagementsManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#delete DatabasePluggableDatabasePluggabledatabasemanagementsManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#update DatabasePluggableDatabasePluggabledatabasemanagementsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.enablePluggabledatabasemanagement">enable_pluggabledatabasemanagement</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.pdbDefault">pdb_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.pdbIpDefault">pdb_ip_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `enable_pluggabledatabasemanagement`<sup>Required</sup> <a name="enable_pluggabledatabasemanagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.enablePluggabledatabasemanagement"></a>

```python
enable_pluggabledatabasemanagement: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pdb_default`<sup>Required</sup> <a name="pdb_default" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.pdbDefault"></a>

```python
pdb_default: str
```

- *Type:* str

---

##### `pdb_ip_default`<sup>Required</sup> <a name="pdb_ip_default" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.pdbIpDefault"></a>

```python
pdb_ip_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings</a>

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.passwordSecretIdInput">password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_secret_id_input`<sup>Optional</sup> <a name="password_secret_id_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```python
password_secret_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a>

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.enablePluggabledatabasemanagement">enable_pluggabledatabasemanagement</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.managementStatus">management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_pluggabledatabasemanagement`<sup>Required</sup> <a name="enable_pluggabledatabasemanagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.enablePluggabledatabasemanagement"></a>

```python
enable_pluggabledatabasemanagement: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `management_status`<sup>Required</sup> <a name="management_status" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```python
management_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_database_pluggabledatabasemanagements_management

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>]

---



