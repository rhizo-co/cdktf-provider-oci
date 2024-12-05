# `networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule <a name="`networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfile <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile oci_network_firewall_network_firewall_policy_decryption_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_decryption_profile

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_firewall_policy_id: str,
  type: str,
  are_certificate_extensions_restricted: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_auto_include_alt_name: typing.Union[bool, IResolvable] = None,
  is_expired_certificate_blocked: typing.Union[bool, IResolvable] = None,
  is_out_of_capacity_blocked: typing.Union[bool, IResolvable] = None,
  is_revocation_status_timeout_blocked: typing.Union[bool, IResolvable] = None,
  is_unknown_revocation_status_blocked: typing.Union[bool, IResolvable] = None,
  is_unsupported_cipher_blocked: typing.Union[bool, IResolvable] = None,
  is_unsupported_version_blocked: typing.Union[bool, IResolvable] = None,
  is_untrusted_issuer_blocked: typing.Union[bool, IResolvable] = None,
  timeouts: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.areCertificateExtensionsRestricted">are_certificate_extensions_restricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isAutoIncludeAltName">is_auto_include_alt_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isExpiredCertificateBlocked">is_expired_certificate_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isOutOfCapacityBlocked">is_out_of_capacity_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isRevocationStatusTimeoutBlocked">is_revocation_status_timeout_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnknownRevocationStatusBlocked">is_unknown_revocation_status_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnsupportedCipherBlocked">is_unsupported_cipher_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnsupportedVersionBlocked">is_unsupported_version_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUntrustedIssuerBlocked">is_untrusted_issuer_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}.

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}.

---

##### `are_certificate_extensions_restricted`<sup>Optional</sup> <a name="are_certificate_extensions_restricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.areCertificateExtensionsRestricted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_auto_include_alt_name`<sup>Optional</sup> <a name="is_auto_include_alt_name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isAutoIncludeAltName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}.

---

##### `is_expired_certificate_blocked`<sup>Optional</sup> <a name="is_expired_certificate_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isExpiredCertificateBlocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}.

---

##### `is_out_of_capacity_blocked`<sup>Optional</sup> <a name="is_out_of_capacity_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isOutOfCapacityBlocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}.

---

##### `is_revocation_status_timeout_blocked`<sup>Optional</sup> <a name="is_revocation_status_timeout_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isRevocationStatusTimeoutBlocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}.

---

##### `is_unknown_revocation_status_blocked`<sup>Optional</sup> <a name="is_unknown_revocation_status_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnknownRevocationStatusBlocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}.

---

##### `is_unsupported_cipher_blocked`<sup>Optional</sup> <a name="is_unsupported_cipher_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnsupportedCipherBlocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}.

---

##### `is_unsupported_version_blocked`<sup>Optional</sup> <a name="is_unsupported_version_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnsupportedVersionBlocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}.

---

##### `is_untrusted_issuer_blocked`<sup>Optional</sup> <a name="is_untrusted_issuer_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUntrustedIssuerBlocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#timeouts NetworkFirewallNetworkFirewallPolicyDecryptionProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetAreCertificateExtensionsRestricted">reset_are_certificate_extensions_restricted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsAutoIncludeAltName">reset_is_auto_include_alt_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsExpiredCertificateBlocked">reset_is_expired_certificate_blocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsOutOfCapacityBlocked">reset_is_out_of_capacity_blocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsRevocationStatusTimeoutBlocked">reset_is_revocation_status_timeout_blocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnknownRevocationStatusBlocked">reset_is_unknown_revocation_status_blocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedCipherBlocked">reset_is_unsupported_cipher_blocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedVersionBlocked">reset_is_unsupported_version_blocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUntrustedIssuerBlocked">reset_is_untrusted_issuer_blocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}.

---

##### `reset_are_certificate_extensions_restricted` <a name="reset_are_certificate_extensions_restricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetAreCertificateExtensionsRestricted"></a>

```python
def reset_are_certificate_extensions_restricted() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_auto_include_alt_name` <a name="reset_is_auto_include_alt_name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsAutoIncludeAltName"></a>

```python
def reset_is_auto_include_alt_name() -> None
```

##### `reset_is_expired_certificate_blocked` <a name="reset_is_expired_certificate_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsExpiredCertificateBlocked"></a>

```python
def reset_is_expired_certificate_blocked() -> None
```

##### `reset_is_out_of_capacity_blocked` <a name="reset_is_out_of_capacity_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsOutOfCapacityBlocked"></a>

```python
def reset_is_out_of_capacity_blocked() -> None
```

##### `reset_is_revocation_status_timeout_blocked` <a name="reset_is_revocation_status_timeout_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsRevocationStatusTimeoutBlocked"></a>

```python
def reset_is_revocation_status_timeout_blocked() -> None
```

##### `reset_is_unknown_revocation_status_blocked` <a name="reset_is_unknown_revocation_status_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnknownRevocationStatusBlocked"></a>

```python
def reset_is_unknown_revocation_status_blocked() -> None
```

##### `reset_is_unsupported_cipher_blocked` <a name="reset_is_unsupported_cipher_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedCipherBlocked"></a>

```python
def reset_is_unsupported_cipher_blocked() -> None
```

##### `reset_is_unsupported_version_blocked` <a name="reset_is_unsupported_version_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedVersionBlocked"></a>

```python
def reset_is_unsupported_version_blocked() -> None
```

##### `reset_is_untrusted_issuer_blocked` <a name="reset_is_untrusted_issuer_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUntrustedIssuerBlocked"></a>

```python
def reset_is_untrusted_issuer_blocked() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_decryption_profile

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_decryption_profile

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_decryption_profile

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_decryption_profile

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkFirewallNetworkFirewallPolicyDecryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput">are_certificate_extensions_restricted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput">is_auto_include_alt_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput">is_expired_certificate_blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput">is_out_of_capacity_blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput">is_revocation_status_timeout_blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput">is_unknown_revocation_status_blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput">is_unsupported_cipher_blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput">is_unsupported_version_blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput">is_untrusted_issuer_blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput">network_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted">are_certificate_extensions_restricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName">is_auto_include_alt_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked">is_expired_certificate_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked">is_out_of_capacity_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked">is_revocation_status_timeout_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked">is_unknown_revocation_status_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked">is_unsupported_cipher_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked">is_unsupported_version_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked">is_untrusted_issuer_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts"></a>

```python
timeouts: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a>

---

##### `are_certificate_extensions_restricted_input`<sup>Optional</sup> <a name="are_certificate_extensions_restricted_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput"></a>

```python
are_certificate_extensions_restricted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_auto_include_alt_name_input`<sup>Optional</sup> <a name="is_auto_include_alt_name_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput"></a>

```python
is_auto_include_alt_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_expired_certificate_blocked_input`<sup>Optional</sup> <a name="is_expired_certificate_blocked_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput"></a>

```python
is_expired_certificate_blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_out_of_capacity_blocked_input`<sup>Optional</sup> <a name="is_out_of_capacity_blocked_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput"></a>

```python
is_out_of_capacity_blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_revocation_status_timeout_blocked_input`<sup>Optional</sup> <a name="is_revocation_status_timeout_blocked_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput"></a>

```python
is_revocation_status_timeout_blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unknown_revocation_status_blocked_input`<sup>Optional</sup> <a name="is_unknown_revocation_status_blocked_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput"></a>

```python
is_unknown_revocation_status_blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unsupported_cipher_blocked_input`<sup>Optional</sup> <a name="is_unsupported_cipher_blocked_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput"></a>

```python
is_unsupported_cipher_blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unsupported_version_blocked_input`<sup>Optional</sup> <a name="is_unsupported_version_blocked_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput"></a>

```python
is_unsupported_version_blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_untrusted_issuer_blocked_input`<sup>Optional</sup> <a name="is_untrusted_issuer_blocked_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput"></a>

```python
is_untrusted_issuer_blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_firewall_policy_id_input`<sup>Optional</sup> <a name="network_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput"></a>

```python
network_firewall_policy_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `are_certificate_extensions_restricted`<sup>Required</sup> <a name="are_certificate_extensions_restricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted"></a>

```python
are_certificate_extensions_restricted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_include_alt_name`<sup>Required</sup> <a name="is_auto_include_alt_name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName"></a>

```python
is_auto_include_alt_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_expired_certificate_blocked`<sup>Required</sup> <a name="is_expired_certificate_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked"></a>

```python
is_expired_certificate_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_out_of_capacity_blocked`<sup>Required</sup> <a name="is_out_of_capacity_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked"></a>

```python
is_out_of_capacity_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_revocation_status_timeout_blocked`<sup>Required</sup> <a name="is_revocation_status_timeout_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked"></a>

```python
is_revocation_status_timeout_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unknown_revocation_status_blocked`<sup>Required</sup> <a name="is_unknown_revocation_status_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked"></a>

```python
is_unknown_revocation_status_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unsupported_cipher_blocked`<sup>Required</sup> <a name="is_unsupported_cipher_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked"></a>

```python
is_unsupported_cipher_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unsupported_version_blocked`<sup>Required</sup> <a name="is_unsupported_version_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked"></a>

```python
is_unsupported_version_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_untrusted_issuer_blocked`<sup>Required</sup> <a name="is_untrusted_issuer_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked"></a>

```python
is_untrusted_issuer_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_decryption_profile

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_firewall_policy_id: str,
  type: str,
  are_certificate_extensions_restricted: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_auto_include_alt_name: typing.Union[bool, IResolvable] = None,
  is_expired_certificate_blocked: typing.Union[bool, IResolvable] = None,
  is_out_of_capacity_blocked: typing.Union[bool, IResolvable] = None,
  is_revocation_status_timeout_blocked: typing.Union[bool, IResolvable] = None,
  is_unknown_revocation_status_blocked: typing.Union[bool, IResolvable] = None,
  is_unsupported_cipher_blocked: typing.Union[bool, IResolvable] = None,
  is_unsupported_version_blocked: typing.Union[bool, IResolvable] = None,
  is_untrusted_issuer_blocked: typing.Union[bool, IResolvable] = None,
  timeouts: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted">are_certificate_extensions_restricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName">is_auto_include_alt_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked">is_expired_certificate_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked">is_out_of_capacity_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked">is_revocation_status_timeout_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked">is_unknown_revocation_status_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked">is_unsupported_cipher_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked">is_unsupported_version_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked">is_untrusted_issuer_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}.

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}.

---

##### `are_certificate_extensions_restricted`<sup>Optional</sup> <a name="are_certificate_extensions_restricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted"></a>

```python
are_certificate_extensions_restricted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_auto_include_alt_name`<sup>Optional</sup> <a name="is_auto_include_alt_name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName"></a>

```python
is_auto_include_alt_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}.

---

##### `is_expired_certificate_blocked`<sup>Optional</sup> <a name="is_expired_certificate_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked"></a>

```python
is_expired_certificate_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}.

---

##### `is_out_of_capacity_blocked`<sup>Optional</sup> <a name="is_out_of_capacity_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked"></a>

```python
is_out_of_capacity_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}.

---

##### `is_revocation_status_timeout_blocked`<sup>Optional</sup> <a name="is_revocation_status_timeout_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked"></a>

```python
is_revocation_status_timeout_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}.

---

##### `is_unknown_revocation_status_blocked`<sup>Optional</sup> <a name="is_unknown_revocation_status_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked"></a>

```python
is_unknown_revocation_status_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}.

---

##### `is_unsupported_cipher_blocked`<sup>Optional</sup> <a name="is_unsupported_cipher_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked"></a>

```python
is_unsupported_cipher_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}.

---

##### `is_unsupported_version_blocked`<sup>Optional</sup> <a name="is_unsupported_version_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked"></a>

```python
is_unsupported_version_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}.

---

##### `is_untrusted_issuer_blocked`<sup>Optional</sup> <a name="is_untrusted_issuer_blocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked"></a>

```python
is_untrusted_issuer_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts"></a>

```python
timeouts: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#timeouts NetworkFirewallNetworkFirewallPolicyDecryptionProfile#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_decryption_profile

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_decryption_profile

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>]

---



