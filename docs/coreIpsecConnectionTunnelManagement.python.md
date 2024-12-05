# `coreIpsecConnectionTunnelManagement` Submodule <a name="`coreIpsecConnectionTunnelManagement` Submodule" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreIpsecConnectionTunnelManagement <a name="CoreIpsecConnectionTunnelManagement" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management oci_core_ipsec_connection_tunnel_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipsec_id: str,
  tunnel_id: str,
  bgp_session_info: CoreIpsecConnectionTunnelManagementBgpSessionInfo = None,
  display_name: str = None,
  dpd_config: typing.Union[IResolvable, typing.List[CoreIpsecConnectionTunnelManagementDpdConfig]] = None,
  encryption_domain_config: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig = None,
  id: str = None,
  ike_version: str = None,
  nat_translation_enabled: str = None,
  oracle_can_initiate: str = None,
  phase_one_details: CoreIpsecConnectionTunnelManagementPhaseOneDetails = None,
  phase_two_details: CoreIpsecConnectionTunnelManagementPhaseTwoDetails = None,
  routing: str = None,
  shared_secret: str = None,
  timeouts: CoreIpsecConnectionTunnelManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.tunnelId">tunnel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.bgpSessionInfo">bgp_session_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | bgp_session_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.dpdConfig">dpd_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]]</code> | dpd_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.encryptionDomainConfig">encryption_domain_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | encryption_domain_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.ikeVersion">ike_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.natTranslationEnabled">nat_translation_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.oracleCanInitiate">oracle_can_initiate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.phaseOneDetails">phase_one_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | phase_one_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.phaseTwoDetails">phase_two_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | phase_two_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.routing">routing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.sharedSecret">shared_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.ipsecId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}.

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.tunnelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}.

---

##### `bgp_session_info`<sup>Optional</sup> <a name="bgp_session_info" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.bgpSessionInfo"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

bgp_session_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#bgp_session_info CoreIpsecConnectionTunnelManagement#bgp_session_info}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}.

---

##### `dpd_config`<sup>Optional</sup> <a name="dpd_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.dpdConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]]

dpd_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_config CoreIpsecConnectionTunnelManagement#dpd_config}

---

##### `encryption_domain_config`<sup>Optional</sup> <a name="encryption_domain_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.encryptionDomainConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

encryption_domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#encryption_domain_config CoreIpsecConnectionTunnelManagement#encryption_domain_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ike_version`<sup>Optional</sup> <a name="ike_version" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.ikeVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}.

---

##### `nat_translation_enabled`<sup>Optional</sup> <a name="nat_translation_enabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.natTranslationEnabled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}.

---

##### `oracle_can_initiate`<sup>Optional</sup> <a name="oracle_can_initiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.oracleCanInitiate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}.

---

##### `phase_one_details`<sup>Optional</sup> <a name="phase_one_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.phaseOneDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

phase_one_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_one_details CoreIpsecConnectionTunnelManagement#phase_one_details}

---

##### `phase_two_details`<sup>Optional</sup> <a name="phase_two_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.phaseTwoDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

phase_two_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_two_details CoreIpsecConnectionTunnelManagement#phase_two_details}

---

##### `routing`<sup>Optional</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.routing"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}.

---

##### `shared_secret`<sup>Optional</sup> <a name="shared_secret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.sharedSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#timeouts CoreIpsecConnectionTunnelManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo">put_bgp_session_info</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig">put_dpd_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig">put_encryption_domain_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails">put_phase_one_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails">put_phase_two_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetBgpSessionInfo">reset_bgp_session_info</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDpdConfig">reset_dpd_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetEncryptionDomainConfig">reset_encryption_domain_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetIkeVersion">reset_ike_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetNatTranslationEnabled">reset_nat_translation_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOracleCanInitiate">reset_oracle_can_initiate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseOneDetails">reset_phase_one_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseTwoDetails">reset_phase_two_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetRouting">reset_routing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetSharedSecret">reset_shared_secret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bgp_session_info` <a name="put_bgp_session_info" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo"></a>

```python
def put_bgp_session_info(
  customer_bgp_asn: str = None,
  customer_interface_ip: str = None,
  customer_interface_ipv6: str = None,
  oracle_interface_ip: str = None,
  oracle_interface_ipv6: str = None
) -> None
```

###### `customer_bgp_asn`<sup>Optional</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo.parameter.customerBgpAsn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}.

---

###### `customer_interface_ip`<sup>Optional</sup> <a name="customer_interface_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo.parameter.customerInterfaceIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}.

---

###### `customer_interface_ipv6`<sup>Optional</sup> <a name="customer_interface_ipv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo.parameter.customerInterfaceIpv6"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}.

---

###### `oracle_interface_ip`<sup>Optional</sup> <a name="oracle_interface_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo.parameter.oracleInterfaceIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}.

---

###### `oracle_interface_ipv6`<sup>Optional</sup> <a name="oracle_interface_ipv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo.parameter.oracleInterfaceIpv6"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}.

---

##### `put_dpd_config` <a name="put_dpd_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig"></a>

```python
def put_dpd_config(
  value: typing.Union[IResolvable, typing.List[CoreIpsecConnectionTunnelManagementDpdConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]]

---

##### `put_encryption_domain_config` <a name="put_encryption_domain_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig"></a>

```python
def put_encryption_domain_config(
  cpe_traffic_selector: typing.List[str] = None,
  oracle_traffic_selector: typing.List[str] = None
) -> None
```

###### `cpe_traffic_selector`<sup>Optional</sup> <a name="cpe_traffic_selector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig.parameter.cpeTrafficSelector"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}.

---

###### `oracle_traffic_selector`<sup>Optional</sup> <a name="oracle_traffic_selector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig.parameter.oracleTrafficSelector"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}.

---

##### `put_phase_one_details` <a name="put_phase_one_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails"></a>

```python
def put_phase_one_details(
  custom_authentication_algorithm: str = None,
  custom_dh_group: str = None,
  custom_encryption_algorithm: str = None,
  is_custom_phase_one_config: typing.Union[bool, IResolvable] = None,
  lifetime: typing.Union[int, float] = None
) -> None
```

###### `custom_authentication_algorithm`<sup>Optional</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails.parameter.customAuthenticationAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

###### `custom_dh_group`<sup>Optional</sup> <a name="custom_dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails.parameter.customDhGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}.

---

###### `custom_encryption_algorithm`<sup>Optional</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails.parameter.customEncryptionAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

###### `is_custom_phase_one_config`<sup>Optional</sup> <a name="is_custom_phase_one_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails.parameter.isCustomPhaseOneConfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}.

---

###### `lifetime`<sup>Optional</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails.parameter.lifetime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

##### `put_phase_two_details` <a name="put_phase_two_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails"></a>

```python
def put_phase_two_details(
  custom_authentication_algorithm: str = None,
  custom_encryption_algorithm: str = None,
  dh_group: str = None,
  is_custom_phase_two_config: typing.Union[bool, IResolvable] = None,
  is_pfs_enabled: typing.Union[bool, IResolvable] = None,
  lifetime: typing.Union[int, float] = None
) -> None
```

###### `custom_authentication_algorithm`<sup>Optional</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails.parameter.customAuthenticationAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

###### `custom_encryption_algorithm`<sup>Optional</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails.parameter.customEncryptionAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

###### `dh_group`<sup>Optional</sup> <a name="dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails.parameter.dhGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}.

---

###### `is_custom_phase_two_config`<sup>Optional</sup> <a name="is_custom_phase_two_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails.parameter.isCustomPhaseTwoConfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}.

---

###### `is_pfs_enabled`<sup>Optional</sup> <a name="is_pfs_enabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails.parameter.isPfsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}.

---

###### `lifetime`<sup>Optional</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails.parameter.lifetime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}.

---

##### `reset_bgp_session_info` <a name="reset_bgp_session_info" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetBgpSessionInfo"></a>

```python
def reset_bgp_session_info() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_dpd_config` <a name="reset_dpd_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDpdConfig"></a>

```python
def reset_dpd_config() -> None
```

##### `reset_encryption_domain_config` <a name="reset_encryption_domain_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetEncryptionDomainConfig"></a>

```python
def reset_encryption_domain_config() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ike_version` <a name="reset_ike_version" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetIkeVersion"></a>

```python
def reset_ike_version() -> None
```

##### `reset_nat_translation_enabled` <a name="reset_nat_translation_enabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetNatTranslationEnabled"></a>

```python
def reset_nat_translation_enabled() -> None
```

##### `reset_oracle_can_initiate` <a name="reset_oracle_can_initiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOracleCanInitiate"></a>

```python
def reset_oracle_can_initiate() -> None
```

##### `reset_phase_one_details` <a name="reset_phase_one_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseOneDetails"></a>

```python
def reset_phase_one_details() -> None
```

##### `reset_phase_two_details` <a name="reset_phase_two_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseTwoDetails"></a>

```python
def reset_phase_two_details() -> None
```

##### `reset_routing` <a name="reset_routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetRouting"></a>

```python
def reset_routing() -> None
```

##### `reset_shared_secret` <a name="reset_shared_secret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetSharedSecret"></a>

```python
def reset_shared_secret() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreIpsecConnectionTunnelManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreIpsecConnectionTunnelManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreIpsecConnectionTunnelManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreIpsecConnectionTunnelManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreIpsecConnectionTunnelManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.associatedVirtualCircuits">associated_virtual_circuits</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfo">bgp_session_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference">CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cpeIp">cpe_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfig">dpd_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList">CoreIpsecConnectionTunnelManagementDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdMode">dpd_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdTimeoutInSec">dpd_timeout_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfig">encryption_domain_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference">CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetails">phase_one_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetails">phase_two_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference">CoreIpsecConnectionTunnelManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeStatusUpdated">time_status_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.vpnIp">vpn_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfoInput">bgp_session_info_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfigInput">dpd_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfigInput">encryption_domain_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersionInput">ike_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecIdInput">ipsec_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabledInput">nat_translation_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiateInput">oracle_can_initiate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetailsInput">phase_one_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetailsInput">phase_two_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routingInput">routing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecretInput">shared_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersion">ike_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecId">ipsec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabled">nat_translation_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiate">oracle_can_initiate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routing">routing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecret">shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_virtual_circuits`<sup>Required</sup> <a name="associated_virtual_circuits" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.associatedVirtualCircuits"></a>

```python
associated_virtual_circuits: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bgp_session_info`<sup>Required</sup> <a name="bgp_session_info" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfo"></a>

```python
bgp_session_info: CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference">CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpe_ip`<sup>Required</sup> <a name="cpe_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cpeIp"></a>

```python
cpe_ip: str
```

- *Type:* str

---

##### `dpd_config`<sup>Required</sup> <a name="dpd_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfig"></a>

```python
dpd_config: CoreIpsecConnectionTunnelManagementDpdConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList">CoreIpsecConnectionTunnelManagementDpdConfigList</a>

---

##### `dpd_mode`<sup>Required</sup> <a name="dpd_mode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdMode"></a>

```python
dpd_mode: str
```

- *Type:* str

---

##### `dpd_timeout_in_sec`<sup>Required</sup> <a name="dpd_timeout_in_sec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdTimeoutInSec"></a>

```python
dpd_timeout_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption_domain_config`<sup>Required</sup> <a name="encryption_domain_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfig"></a>

```python
encryption_domain_config: CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference">CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference</a>

---

##### `phase_one_details`<sup>Required</sup> <a name="phase_one_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetails"></a>

```python
phase_one_details: CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference</a>

---

##### `phase_two_details`<sup>Required</sup> <a name="phase_two_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetails"></a>

```python
phase_two_details: CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeouts"></a>

```python
timeouts: CoreIpsecConnectionTunnelManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference">CoreIpsecConnectionTunnelManagementTimeoutsOutputReference</a>

---

##### `time_status_updated`<sup>Required</sup> <a name="time_status_updated" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeStatusUpdated"></a>

```python
time_status_updated: str
```

- *Type:* str

---

##### `vpn_ip`<sup>Required</sup> <a name="vpn_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.vpnIp"></a>

```python
vpn_ip: str
```

- *Type:* str

---

##### `bgp_session_info_input`<sup>Optional</sup> <a name="bgp_session_info_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfoInput"></a>

```python
bgp_session_info_input: CoreIpsecConnectionTunnelManagementBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dpd_config_input`<sup>Optional</sup> <a name="dpd_config_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfigInput"></a>

```python
dpd_config_input: typing.Union[IResolvable, typing.List[CoreIpsecConnectionTunnelManagementDpdConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]]

---

##### `encryption_domain_config_input`<sup>Optional</sup> <a name="encryption_domain_config_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfigInput"></a>

```python
encryption_domain_config_input: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ike_version_input`<sup>Optional</sup> <a name="ike_version_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersionInput"></a>

```python
ike_version_input: str
```

- *Type:* str

---

##### `ipsec_id_input`<sup>Optional</sup> <a name="ipsec_id_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecIdInput"></a>

```python
ipsec_id_input: str
```

- *Type:* str

---

##### `nat_translation_enabled_input`<sup>Optional</sup> <a name="nat_translation_enabled_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabledInput"></a>

```python
nat_translation_enabled_input: str
```

- *Type:* str

---

##### `oracle_can_initiate_input`<sup>Optional</sup> <a name="oracle_can_initiate_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiateInput"></a>

```python
oracle_can_initiate_input: str
```

- *Type:* str

---

##### `phase_one_details_input`<sup>Optional</sup> <a name="phase_one_details_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetailsInput"></a>

```python
phase_one_details_input: CoreIpsecConnectionTunnelManagementPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---

##### `phase_two_details_input`<sup>Optional</sup> <a name="phase_two_details_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetailsInput"></a>

```python
phase_two_details_input: CoreIpsecConnectionTunnelManagementPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---

##### `routing_input`<sup>Optional</sup> <a name="routing_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routingInput"></a>

```python
routing_input: str
```

- *Type:* str

---

##### `shared_secret_input`<sup>Optional</sup> <a name="shared_secret_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecretInput"></a>

```python
shared_secret_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreIpsecConnectionTunnelManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>]

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ike_version`<sup>Required</sup> <a name="ike_version" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersion"></a>

```python
ike_version: str
```

- *Type:* str

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

---

##### `nat_translation_enabled`<sup>Required</sup> <a name="nat_translation_enabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabled"></a>

```python
nat_translation_enabled: str
```

- *Type:* str

---

##### `oracle_can_initiate`<sup>Required</sup> <a name="oracle_can_initiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiate"></a>

```python
oracle_can_initiate: str
```

- *Type:* str

---

##### `routing`<sup>Required</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routing"></a>

```python
routing: str
```

- *Type:* str

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreIpsecConnectionTunnelManagementBgpSessionInfo <a name="CoreIpsecConnectionTunnelManagementBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo(
  customer_bgp_asn: str = None,
  customer_interface_ip: str = None,
  customer_interface_ipv6: str = None,
  oracle_interface_ip: str = None,
  oracle_interface_ipv6: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerBgpAsn">customer_bgp_asn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIp">customer_interface_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIpv6">customer_interface_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIp">oracle_interface_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIpv6">oracle_interface_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}. |

---

##### `customer_bgp_asn`<sup>Optional</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerBgpAsn"></a>

```python
customer_bgp_asn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}.

---

##### `customer_interface_ip`<sup>Optional</sup> <a name="customer_interface_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIp"></a>

```python
customer_interface_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}.

---

##### `customer_interface_ipv6`<sup>Optional</sup> <a name="customer_interface_ipv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIpv6"></a>

```python
customer_interface_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}.

---

##### `oracle_interface_ip`<sup>Optional</sup> <a name="oracle_interface_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIp"></a>

```python
oracle_interface_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}.

---

##### `oracle_interface_ipv6`<sup>Optional</sup> <a name="oracle_interface_ipv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIpv6"></a>

```python
oracle_interface_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}.

---

### CoreIpsecConnectionTunnelManagementConfig <a name="CoreIpsecConnectionTunnelManagementConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipsec_id: str,
  tunnel_id: str,
  bgp_session_info: CoreIpsecConnectionTunnelManagementBgpSessionInfo = None,
  display_name: str = None,
  dpd_config: typing.Union[IResolvable, typing.List[CoreIpsecConnectionTunnelManagementDpdConfig]] = None,
  encryption_domain_config: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig = None,
  id: str = None,
  ike_version: str = None,
  nat_translation_enabled: str = None,
  oracle_can_initiate: str = None,
  phase_one_details: CoreIpsecConnectionTunnelManagementPhaseOneDetails = None,
  phase_two_details: CoreIpsecConnectionTunnelManagementPhaseTwoDetails = None,
  routing: str = None,
  shared_secret: str = None,
  timeouts: CoreIpsecConnectionTunnelManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.tunnelId">tunnel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.bgpSessionInfo">bgp_session_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | bgp_session_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dpdConfig">dpd_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]]</code> | dpd_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.encryptionDomainConfig">encryption_domain_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | encryption_domain_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ikeVersion">ike_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.natTranslationEnabled">nat_translation_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.oracleCanInitiate">oracle_can_initiate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseOneDetails">phase_one_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | phase_one_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseTwoDetails">phase_two_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | phase_two_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.routing">routing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.sharedSecret">shared_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}.

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}.

---

##### `bgp_session_info`<sup>Optional</sup> <a name="bgp_session_info" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.bgpSessionInfo"></a>

```python
bgp_session_info: CoreIpsecConnectionTunnelManagementBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

bgp_session_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#bgp_session_info CoreIpsecConnectionTunnelManagement#bgp_session_info}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}.

---

##### `dpd_config`<sup>Optional</sup> <a name="dpd_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dpdConfig"></a>

```python
dpd_config: typing.Union[IResolvable, typing.List[CoreIpsecConnectionTunnelManagementDpdConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]]

dpd_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_config CoreIpsecConnectionTunnelManagement#dpd_config}

---

##### `encryption_domain_config`<sup>Optional</sup> <a name="encryption_domain_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.encryptionDomainConfig"></a>

```python
encryption_domain_config: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

encryption_domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#encryption_domain_config CoreIpsecConnectionTunnelManagement#encryption_domain_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ike_version`<sup>Optional</sup> <a name="ike_version" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ikeVersion"></a>

```python
ike_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}.

---

##### `nat_translation_enabled`<sup>Optional</sup> <a name="nat_translation_enabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.natTranslationEnabled"></a>

```python
nat_translation_enabled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}.

---

##### `oracle_can_initiate`<sup>Optional</sup> <a name="oracle_can_initiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.oracleCanInitiate"></a>

```python
oracle_can_initiate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}.

---

##### `phase_one_details`<sup>Optional</sup> <a name="phase_one_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseOneDetails"></a>

```python
phase_one_details: CoreIpsecConnectionTunnelManagementPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

phase_one_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_one_details CoreIpsecConnectionTunnelManagement#phase_one_details}

---

##### `phase_two_details`<sup>Optional</sup> <a name="phase_two_details" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseTwoDetails"></a>

```python
phase_two_details: CoreIpsecConnectionTunnelManagementPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

phase_two_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_two_details CoreIpsecConnectionTunnelManagement#phase_two_details}

---

##### `routing`<sup>Optional</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.routing"></a>

```python
routing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}.

---

##### `shared_secret`<sup>Optional</sup> <a name="shared_secret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.timeouts"></a>

```python
timeouts: CoreIpsecConnectionTunnelManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#timeouts CoreIpsecConnectionTunnelManagement#timeouts}

---

### CoreIpsecConnectionTunnelManagementDpdConfig <a name="CoreIpsecConnectionTunnelManagementDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig(
  dpd_mode: str = None,
  dpd_timeout_in_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdMode">dpd_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_mode CoreIpsecConnectionTunnelManagement#dpd_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdTimeoutInSec">dpd_timeout_in_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_timeout_in_sec CoreIpsecConnectionTunnelManagement#dpd_timeout_in_sec}. |

---

##### `dpd_mode`<sup>Optional</sup> <a name="dpd_mode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdMode"></a>

```python
dpd_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_mode CoreIpsecConnectionTunnelManagement#dpd_mode}.

---

##### `dpd_timeout_in_sec`<sup>Optional</sup> <a name="dpd_timeout_in_sec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdTimeoutInSec"></a>

```python
dpd_timeout_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_timeout_in_sec CoreIpsecConnectionTunnelManagement#dpd_timeout_in_sec}.

---

### CoreIpsecConnectionTunnelManagementEncryptionDomainConfig <a name="CoreIpsecConnectionTunnelManagementEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig(
  cpe_traffic_selector: typing.List[str] = None,
  oracle_traffic_selector: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.cpeTrafficSelector">cpe_traffic_selector</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.oracleTrafficSelector">oracle_traffic_selector</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}. |

---

##### `cpe_traffic_selector`<sup>Optional</sup> <a name="cpe_traffic_selector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.cpeTrafficSelector"></a>

```python
cpe_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}.

---

##### `oracle_traffic_selector`<sup>Optional</sup> <a name="oracle_traffic_selector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.oracleTrafficSelector"></a>

```python
oracle_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}.

---

### CoreIpsecConnectionTunnelManagementPhaseOneDetails <a name="CoreIpsecConnectionTunnelManagementPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails(
  custom_authentication_algorithm: str = None,
  custom_dh_group: str = None,
  custom_encryption_algorithm: str = None,
  is_custom_phase_one_config: typing.Union[bool, IResolvable] = None,
  lifetime: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customAuthenticationAlgorithm">custom_authentication_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customDhGroup">custom_dh_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customEncryptionAlgorithm">custom_encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.isCustomPhaseOneConfig">is_custom_phase_one_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}. |

---

##### `custom_authentication_algorithm`<sup>Optional</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customAuthenticationAlgorithm"></a>

```python
custom_authentication_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

##### `custom_dh_group`<sup>Optional</sup> <a name="custom_dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customDhGroup"></a>

```python
custom_dh_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}.

---

##### `custom_encryption_algorithm`<sup>Optional</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customEncryptionAlgorithm"></a>

```python
custom_encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

##### `is_custom_phase_one_config`<sup>Optional</sup> <a name="is_custom_phase_one_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.isCustomPhaseOneConfig"></a>

```python
is_custom_phase_one_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

### CoreIpsecConnectionTunnelManagementPhaseTwoDetails <a name="CoreIpsecConnectionTunnelManagementPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails(
  custom_authentication_algorithm: str = None,
  custom_encryption_algorithm: str = None,
  dh_group: str = None,
  is_custom_phase_two_config: typing.Union[bool, IResolvable] = None,
  is_pfs_enabled: typing.Union[bool, IResolvable] = None,
  lifetime: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customAuthenticationAlgorithm">custom_authentication_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customEncryptionAlgorithm">custom_encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.dhGroup">dh_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isCustomPhaseTwoConfig">is_custom_phase_two_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isPfsEnabled">is_pfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}. |

---

##### `custom_authentication_algorithm`<sup>Optional</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customAuthenticationAlgorithm"></a>

```python
custom_authentication_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

##### `custom_encryption_algorithm`<sup>Optional</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customEncryptionAlgorithm"></a>

```python
custom_encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

##### `dh_group`<sup>Optional</sup> <a name="dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}.

---

##### `is_custom_phase_two_config`<sup>Optional</sup> <a name="is_custom_phase_two_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isCustomPhaseTwoConfig"></a>

```python
is_custom_phase_two_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}.

---

##### `is_pfs_enabled`<sup>Optional</sup> <a name="is_pfs_enabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isPfsEnabled"></a>

```python
is_pfs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

### CoreIpsecConnectionTunnelManagementTimeouts <a name="CoreIpsecConnectionTunnelManagementTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference <a name="CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerBgpAsn">reset_customer_bgp_asn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIp">reset_customer_interface_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIpv6">reset_customer_interface_ipv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIp">reset_oracle_interface_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIpv6">reset_oracle_interface_ipv6</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_customer_bgp_asn` <a name="reset_customer_bgp_asn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerBgpAsn"></a>

```python
def reset_customer_bgp_asn() -> None
```

##### `reset_customer_interface_ip` <a name="reset_customer_interface_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIp"></a>

```python
def reset_customer_interface_ip() -> None
```

##### `reset_customer_interface_ipv6` <a name="reset_customer_interface_ipv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIpv6"></a>

```python
def reset_customer_interface_ipv6() -> None
```

##### `reset_oracle_interface_ip` <a name="reset_oracle_interface_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIp"></a>

```python
def reset_oracle_interface_ip() -> None
```

##### `reset_oracle_interface_ipv6` <a name="reset_oracle_interface_ipv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIpv6"></a>

```python
def reset_oracle_interface_ipv6() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpIpv6State">bgp_ipv6_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpState">bgp_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleBgpAsn">oracle_bgp_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsnInput">customer_bgp_asn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpInput">customer_interface_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6Input">customer_interface_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpInput">oracle_interface_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6Input">oracle_interface_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsn">customer_bgp_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIp">customer_interface_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6">customer_interface_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIp">oracle_interface_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">oracle_interface_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_ipv6_state`<sup>Required</sup> <a name="bgp_ipv6_state" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```python
bgp_ipv6_state: str
```

- *Type:* str

---

##### `bgp_state`<sup>Required</sup> <a name="bgp_state" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpState"></a>

```python
bgp_state: str
```

- *Type:* str

---

##### `oracle_bgp_asn`<sup>Required</sup> <a name="oracle_bgp_asn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```python
oracle_bgp_asn: str
```

- *Type:* str

---

##### `customer_bgp_asn_input`<sup>Optional</sup> <a name="customer_bgp_asn_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsnInput"></a>

```python
customer_bgp_asn_input: str
```

- *Type:* str

---

##### `customer_interface_ip_input`<sup>Optional</sup> <a name="customer_interface_ip_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpInput"></a>

```python
customer_interface_ip_input: str
```

- *Type:* str

---

##### `customer_interface_ipv6_input`<sup>Optional</sup> <a name="customer_interface_ipv6_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6Input"></a>

```python
customer_interface_ipv6_input: str
```

- *Type:* str

---

##### `oracle_interface_ip_input`<sup>Optional</sup> <a name="oracle_interface_ip_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpInput"></a>

```python
oracle_interface_ip_input: str
```

- *Type:* str

---

##### `oracle_interface_ipv6_input`<sup>Optional</sup> <a name="oracle_interface_ipv6_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6Input"></a>

```python
oracle_interface_ipv6_input: str
```

- *Type:* str

---

##### `customer_bgp_asn`<sup>Required</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```python
customer_bgp_asn: str
```

- *Type:* str

---

##### `customer_interface_ip`<sup>Required</sup> <a name="customer_interface_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```python
customer_interface_ip: str
```

- *Type:* str

---

##### `customer_interface_ipv6`<sup>Required</sup> <a name="customer_interface_ipv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```python
customer_interface_ipv6: str
```

- *Type:* str

---

##### `oracle_interface_ip`<sup>Required</sup> <a name="oracle_interface_ip" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```python
oracle_interface_ip: str
```

- *Type:* str

---

##### `oracle_interface_ipv6`<sup>Required</sup> <a name="oracle_interface_ipv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```python
oracle_interface_ipv6: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.internalValue"></a>

```python
internal_value: CoreIpsecConnectionTunnelManagementBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---


### CoreIpsecConnectionTunnelManagementDpdConfigList <a name="CoreIpsecConnectionTunnelManagementDpdConfigList" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreIpsecConnectionTunnelManagementDpdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreIpsecConnectionTunnelManagementDpdConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]]

---


### CoreIpsecConnectionTunnelManagementDpdConfigOutputReference <a name="CoreIpsecConnectionTunnelManagementDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdMode">reset_dpd_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdTimeoutInSec">reset_dpd_timeout_in_sec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dpd_mode` <a name="reset_dpd_mode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdMode"></a>

```python
def reset_dpd_mode() -> None
```

##### `reset_dpd_timeout_in_sec` <a name="reset_dpd_timeout_in_sec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdTimeoutInSec"></a>

```python
def reset_dpd_timeout_in_sec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdModeInput">dpd_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSecInput">dpd_timeout_in_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdMode">dpd_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSec">dpd_timeout_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dpd_mode_input`<sup>Optional</sup> <a name="dpd_mode_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdModeInput"></a>

```python
dpd_mode_input: str
```

- *Type:* str

---

##### `dpd_timeout_in_sec_input`<sup>Optional</sup> <a name="dpd_timeout_in_sec_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSecInput"></a>

```python
dpd_timeout_in_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dpd_mode`<sup>Required</sup> <a name="dpd_mode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdMode"></a>

```python
dpd_mode: str
```

- *Type:* str

---

##### `dpd_timeout_in_sec`<sup>Required</sup> <a name="dpd_timeout_in_sec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```python
dpd_timeout_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreIpsecConnectionTunnelManagementDpdConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>]

---


### CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference <a name="CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetCpeTrafficSelector">reset_cpe_traffic_selector</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetOracleTrafficSelector">reset_oracle_traffic_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpe_traffic_selector` <a name="reset_cpe_traffic_selector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetCpeTrafficSelector"></a>

```python
def reset_cpe_traffic_selector() -> None
```

##### `reset_oracle_traffic_selector` <a name="reset_oracle_traffic_selector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetOracleTrafficSelector"></a>

```python
def reset_oracle_traffic_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelectorInput">cpe_traffic_selector_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelectorInput">oracle_traffic_selector_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">cpe_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">oracle_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpe_traffic_selector_input`<sup>Optional</sup> <a name="cpe_traffic_selector_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelectorInput"></a>

```python
cpe_traffic_selector_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oracle_traffic_selector_input`<sup>Optional</sup> <a name="oracle_traffic_selector_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelectorInput"></a>

```python
oracle_traffic_selector_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpe_traffic_selector`<sup>Required</sup> <a name="cpe_traffic_selector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```python
cpe_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oracle_traffic_selector`<sup>Required</sup> <a name="oracle_traffic_selector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```python
oracle_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.internalValue"></a>

```python
internal_value: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---


### CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference <a name="CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomAuthenticationAlgorithm">reset_custom_authentication_algorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomDhGroup">reset_custom_dh_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomEncryptionAlgorithm">reset_custom_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetIsCustomPhaseOneConfig">reset_is_custom_phase_one_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetLifetime">reset_lifetime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_authentication_algorithm` <a name="reset_custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomAuthenticationAlgorithm"></a>

```python
def reset_custom_authentication_algorithm() -> None
```

##### `reset_custom_dh_group` <a name="reset_custom_dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomDhGroup"></a>

```python
def reset_custom_dh_group() -> None
```

##### `reset_custom_encryption_algorithm` <a name="reset_custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomEncryptionAlgorithm"></a>

```python
def reset_custom_encryption_algorithm() -> None
```

##### `reset_is_custom_phase_one_config` <a name="reset_is_custom_phase_one_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetIsCustomPhaseOneConfig"></a>

```python
def reset_is_custom_phase_one_config() -> None
```

##### `reset_lifetime` <a name="reset_lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetLifetime"></a>

```python
def reset_lifetime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isIkeEstablished">is_ike_established</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiated_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedDhGroup">negotiated_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiated_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetime">remaining_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeInt">remaining_lifetime_int</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">remaining_lifetime_last_retrieved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithmInput">custom_authentication_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroupInput">custom_dh_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithmInput">custom_encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfigInput">is_custom_phase_one_config_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetimeInput">lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">custom_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroup">custom_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">custom_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">is_custom_phase_one_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_ike_established`<sup>Required</sup> <a name="is_ike_established" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```python
is_ike_established: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `negotiated_authentication_algorithm`<sup>Required</sup> <a name="negotiated_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```python
negotiated_authentication_algorithm: str
```

- *Type:* str

---

##### `negotiated_dh_group`<sup>Required</sup> <a name="negotiated_dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```python
negotiated_dh_group: str
```

- *Type:* str

---

##### `negotiated_encryption_algorithm`<sup>Required</sup> <a name="negotiated_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```python
negotiated_encryption_algorithm: str
```

- *Type:* str

---

##### `remaining_lifetime`<sup>Required</sup> <a name="remaining_lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```python
remaining_lifetime: str
```

- *Type:* str

---

##### `remaining_lifetime_int`<sup>Required</sup> <a name="remaining_lifetime_int" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```python
remaining_lifetime_int: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remaining_lifetime_last_retrieved`<sup>Required</sup> <a name="remaining_lifetime_last_retrieved" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```python
remaining_lifetime_last_retrieved: str
```

- *Type:* str

---

##### `custom_authentication_algorithm_input`<sup>Optional</sup> <a name="custom_authentication_algorithm_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithmInput"></a>

```python
custom_authentication_algorithm_input: str
```

- *Type:* str

---

##### `custom_dh_group_input`<sup>Optional</sup> <a name="custom_dh_group_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroupInput"></a>

```python
custom_dh_group_input: str
```

- *Type:* str

---

##### `custom_encryption_algorithm_input`<sup>Optional</sup> <a name="custom_encryption_algorithm_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithmInput"></a>

```python
custom_encryption_algorithm_input: str
```

- *Type:* str

---

##### `is_custom_phase_one_config_input`<sup>Optional</sup> <a name="is_custom_phase_one_config_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfigInput"></a>

```python
is_custom_phase_one_config_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifetime_input`<sup>Optional</sup> <a name="lifetime_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetimeInput"></a>

```python
lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_authentication_algorithm`<sup>Required</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```python
custom_authentication_algorithm: str
```

- *Type:* str

---

##### `custom_dh_group`<sup>Required</sup> <a name="custom_dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```python
custom_dh_group: str
```

- *Type:* str

---

##### `custom_encryption_algorithm`<sup>Required</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```python
custom_encryption_algorithm: str
```

- *Type:* str

---

##### `is_custom_phase_one_config`<sup>Required</sup> <a name="is_custom_phase_one_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```python
is_custom_phase_one_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreIpsecConnectionTunnelManagementPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---


### CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference <a name="CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomAuthenticationAlgorithm">reset_custom_authentication_algorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomEncryptionAlgorithm">reset_custom_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetDhGroup">reset_dh_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsCustomPhaseTwoConfig">reset_is_custom_phase_two_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsPfsEnabled">reset_is_pfs_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetLifetime">reset_lifetime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_authentication_algorithm` <a name="reset_custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomAuthenticationAlgorithm"></a>

```python
def reset_custom_authentication_algorithm() -> None
```

##### `reset_custom_encryption_algorithm` <a name="reset_custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomEncryptionAlgorithm"></a>

```python
def reset_custom_encryption_algorithm() -> None
```

##### `reset_dh_group` <a name="reset_dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetDhGroup"></a>

```python
def reset_dh_group() -> None
```

##### `reset_is_custom_phase_two_config` <a name="reset_is_custom_phase_two_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsCustomPhaseTwoConfig"></a>

```python
def reset_is_custom_phase_two_config() -> None
```

##### `reset_is_pfs_enabled` <a name="reset_is_pfs_enabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsPfsEnabled"></a>

```python
def reset_is_pfs_enabled() -> None
```

##### `reset_lifetime` <a name="reset_lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetLifetime"></a>

```python
def reset_lifetime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isEspEstablished">is_esp_established</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiated_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">negotiated_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiated_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetime">remaining_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">remaining_lifetime_int</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">remaining_lifetime_last_retrieved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithmInput">custom_authentication_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithmInput">custom_encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroupInput">dh_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfigInput">is_custom_phase_two_config_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabledInput">is_pfs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetimeInput">lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">custom_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">custom_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">is_custom_phase_two_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabled">is_pfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_esp_established`<sup>Required</sup> <a name="is_esp_established" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```python
is_esp_established: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `negotiated_authentication_algorithm`<sup>Required</sup> <a name="negotiated_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```python
negotiated_authentication_algorithm: str
```

- *Type:* str

---

##### `negotiated_dh_group`<sup>Required</sup> <a name="negotiated_dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```python
negotiated_dh_group: str
```

- *Type:* str

---

##### `negotiated_encryption_algorithm`<sup>Required</sup> <a name="negotiated_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```python
negotiated_encryption_algorithm: str
```

- *Type:* str

---

##### `remaining_lifetime`<sup>Required</sup> <a name="remaining_lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```python
remaining_lifetime: str
```

- *Type:* str

---

##### `remaining_lifetime_int`<sup>Required</sup> <a name="remaining_lifetime_int" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```python
remaining_lifetime_int: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remaining_lifetime_last_retrieved`<sup>Required</sup> <a name="remaining_lifetime_last_retrieved" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```python
remaining_lifetime_last_retrieved: str
```

- *Type:* str

---

##### `custom_authentication_algorithm_input`<sup>Optional</sup> <a name="custom_authentication_algorithm_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithmInput"></a>

```python
custom_authentication_algorithm_input: str
```

- *Type:* str

---

##### `custom_encryption_algorithm_input`<sup>Optional</sup> <a name="custom_encryption_algorithm_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithmInput"></a>

```python
custom_encryption_algorithm_input: str
```

- *Type:* str

---

##### `dh_group_input`<sup>Optional</sup> <a name="dh_group_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroupInput"></a>

```python
dh_group_input: str
```

- *Type:* str

---

##### `is_custom_phase_two_config_input`<sup>Optional</sup> <a name="is_custom_phase_two_config_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfigInput"></a>

```python
is_custom_phase_two_config_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pfs_enabled_input`<sup>Optional</sup> <a name="is_pfs_enabled_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabledInput"></a>

```python
is_pfs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifetime_input`<sup>Optional</sup> <a name="lifetime_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetimeInput"></a>

```python
lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_authentication_algorithm`<sup>Required</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```python
custom_authentication_algorithm: str
```

- *Type:* str

---

##### `custom_encryption_algorithm`<sup>Required</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```python
custom_encryption_algorithm: str
```

- *Type:* str

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `is_custom_phase_two_config`<sup>Required</sup> <a name="is_custom_phase_two_config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```python
is_custom_phase_two_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pfs_enabled`<sup>Required</sup> <a name="is_pfs_enabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```python
is_pfs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreIpsecConnectionTunnelManagementPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---


### CoreIpsecConnectionTunnelManagementTimeoutsOutputReference <a name="CoreIpsecConnectionTunnelManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_ipsec_connection_tunnel_management

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreIpsecConnectionTunnelManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>]

---



