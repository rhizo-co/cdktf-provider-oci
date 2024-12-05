# `networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule <a name="`networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfile <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile oci_network_firewall_network_firewall_policy_decryption_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_firewall_network_firewall_policy_decryption_profile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile;

NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkFirewallPolicyId(java.lang.String)
    .type(java.lang.String)
//  .areCertificateExtensionsRestricted(java.lang.Boolean)
//  .areCertificateExtensionsRestricted(IResolvable)
//  .id(java.lang.String)
//  .isAutoIncludeAltName(java.lang.Boolean)
//  .isAutoIncludeAltName(IResolvable)
//  .isExpiredCertificateBlocked(java.lang.Boolean)
//  .isExpiredCertificateBlocked(IResolvable)
//  .isOutOfCapacityBlocked(java.lang.Boolean)
//  .isOutOfCapacityBlocked(IResolvable)
//  .isRevocationStatusTimeoutBlocked(java.lang.Boolean)
//  .isRevocationStatusTimeoutBlocked(IResolvable)
//  .isUnknownRevocationStatusBlocked(java.lang.Boolean)
//  .isUnknownRevocationStatusBlocked(IResolvable)
//  .isUnsupportedCipherBlocked(java.lang.Boolean)
//  .isUnsupportedCipherBlocked(IResolvable)
//  .isUnsupportedVersionBlocked(java.lang.Boolean)
//  .isUnsupportedVersionBlocked(IResolvable)
//  .isUntrustedIssuerBlocked(java.lang.Boolean)
//  .isUntrustedIssuerBlocked(IResolvable)
//  .timeouts(NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.areCertificateExtensionsRestricted">areCertificateExtensionsRestricted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isAutoIncludeAltName">isAutoIncludeAltName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isExpiredCertificateBlocked">isExpiredCertificateBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isOutOfCapacityBlocked">isOutOfCapacityBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isRevocationStatusTimeoutBlocked">isRevocationStatusTimeoutBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnknownRevocationStatusBlocked">isUnknownRevocationStatusBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnsupportedCipherBlocked">isUnsupportedCipherBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnsupportedVersionBlocked">isUnsupportedVersionBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUntrustedIssuerBlocked">isUntrustedIssuerBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}.

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}.

---

##### `areCertificateExtensionsRestricted`<sup>Optional</sup> <a name="areCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.areCertificateExtensionsRestricted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutoIncludeAltName`<sup>Optional</sup> <a name="isAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isAutoIncludeAltName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}.

---

##### `isExpiredCertificateBlocked`<sup>Optional</sup> <a name="isExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isExpiredCertificateBlocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}.

---

##### `isOutOfCapacityBlocked`<sup>Optional</sup> <a name="isOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isOutOfCapacityBlocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}.

---

##### `isRevocationStatusTimeoutBlocked`<sup>Optional</sup> <a name="isRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isRevocationStatusTimeoutBlocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}.

---

##### `isUnknownRevocationStatusBlocked`<sup>Optional</sup> <a name="isUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnknownRevocationStatusBlocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}.

---

##### `isUnsupportedCipherBlocked`<sup>Optional</sup> <a name="isUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnsupportedCipherBlocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}.

---

##### `isUnsupportedVersionBlocked`<sup>Optional</sup> <a name="isUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUnsupportedVersionBlocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}.

---

##### `isUntrustedIssuerBlocked`<sup>Optional</sup> <a name="isUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.isUntrustedIssuerBlocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

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
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetAreCertificateExtensionsRestricted">resetAreCertificateExtensionsRestricted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsAutoIncludeAltName">resetIsAutoIncludeAltName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsExpiredCertificateBlocked">resetIsExpiredCertificateBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsOutOfCapacityBlocked">resetIsOutOfCapacityBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsRevocationStatusTimeoutBlocked">resetIsRevocationStatusTimeoutBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnknownRevocationStatusBlocked">resetIsUnknownRevocationStatusBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedCipherBlocked">resetIsUnsupportedCipherBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedVersionBlocked">resetIsUnsupportedVersionBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUntrustedIssuerBlocked">resetIsUntrustedIssuerBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts"></a>

```java
public void putTimeouts(NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

---

##### `resetAreCertificateExtensionsRestricted` <a name="resetAreCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetAreCertificateExtensionsRestricted"></a>

```java
public void resetAreCertificateExtensionsRestricted()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetId"></a>

```java
public void resetId()
```

##### `resetIsAutoIncludeAltName` <a name="resetIsAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsAutoIncludeAltName"></a>

```java
public void resetIsAutoIncludeAltName()
```

##### `resetIsExpiredCertificateBlocked` <a name="resetIsExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsExpiredCertificateBlocked"></a>

```java
public void resetIsExpiredCertificateBlocked()
```

##### `resetIsOutOfCapacityBlocked` <a name="resetIsOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsOutOfCapacityBlocked"></a>

```java
public void resetIsOutOfCapacityBlocked()
```

##### `resetIsRevocationStatusTimeoutBlocked` <a name="resetIsRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsRevocationStatusTimeoutBlocked"></a>

```java
public void resetIsRevocationStatusTimeoutBlocked()
```

##### `resetIsUnknownRevocationStatusBlocked` <a name="resetIsUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnknownRevocationStatusBlocked"></a>

```java
public void resetIsUnknownRevocationStatusBlocked()
```

##### `resetIsUnsupportedCipherBlocked` <a name="resetIsUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedCipherBlocked"></a>

```java
public void resetIsUnsupportedCipherBlocked()
```

##### `resetIsUnsupportedVersionBlocked` <a name="resetIsUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedVersionBlocked"></a>

```java
public void resetIsUnsupportedVersionBlocked()
```

##### `resetIsUntrustedIssuerBlocked` <a name="resetIsUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUntrustedIssuerBlocked"></a>

```java
public void resetIsUntrustedIssuerBlocked()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_firewall_network_firewall_policy_decryption_profile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile;

NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_firewall_network_firewall_policy_decryption_profile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile;

NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_firewall_network_firewall_policy_decryption_profile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile;

NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_firewall_network_firewall_policy_decryption_profile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile;

NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkFirewallNetworkFirewallPolicyDecryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId">parentResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput">areCertificateExtensionsRestrictedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput">isAutoIncludeAltNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput">isExpiredCertificateBlockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput">isOutOfCapacityBlockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput">isRevocationStatusTimeoutBlockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput">isUnknownRevocationStatusBlockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput">isUnsupportedCipherBlockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput">isUnsupportedVersionBlockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput">isUntrustedIssuerBlockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput">networkFirewallPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted">areCertificateExtensionsRestricted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName">isAutoIncludeAltName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked">isExpiredCertificateBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked">isOutOfCapacityBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked">isRevocationStatusTimeoutBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked">isUnknownRevocationStatusBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked">isUnsupportedCipherBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked">isUnsupportedVersionBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked">isUntrustedIssuerBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parentResourceId`<sup>Required</sup> <a name="parentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId"></a>

```java
public java.lang.String getParentResourceId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts"></a>

```java
public NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a>

---

##### `areCertificateExtensionsRestrictedInput`<sup>Optional</sup> <a name="areCertificateExtensionsRestrictedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput"></a>

```java
public java.lang.Object getAreCertificateExtensionsRestrictedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAutoIncludeAltNameInput`<sup>Optional</sup> <a name="isAutoIncludeAltNameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput"></a>

```java
public java.lang.Object getIsAutoIncludeAltNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isExpiredCertificateBlockedInput`<sup>Optional</sup> <a name="isExpiredCertificateBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput"></a>

```java
public java.lang.Object getIsExpiredCertificateBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isOutOfCapacityBlockedInput`<sup>Optional</sup> <a name="isOutOfCapacityBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput"></a>

```java
public java.lang.Object getIsOutOfCapacityBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRevocationStatusTimeoutBlockedInput`<sup>Optional</sup> <a name="isRevocationStatusTimeoutBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput"></a>

```java
public java.lang.Object getIsRevocationStatusTimeoutBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUnknownRevocationStatusBlockedInput`<sup>Optional</sup> <a name="isUnknownRevocationStatusBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput"></a>

```java
public java.lang.Object getIsUnknownRevocationStatusBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUnsupportedCipherBlockedInput`<sup>Optional</sup> <a name="isUnsupportedCipherBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput"></a>

```java
public java.lang.Object getIsUnsupportedCipherBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUnsupportedVersionBlockedInput`<sup>Optional</sup> <a name="isUnsupportedVersionBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput"></a>

```java
public java.lang.Object getIsUnsupportedVersionBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUntrustedIssuerBlockedInput`<sup>Optional</sup> <a name="isUntrustedIssuerBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput"></a>

```java
public java.lang.Object getIsUntrustedIssuerBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkFirewallPolicyIdInput`<sup>Optional</sup> <a name="networkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput"></a>

```java
public java.lang.String getNetworkFirewallPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `areCertificateExtensionsRestricted`<sup>Required</sup> <a name="areCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted"></a>

```java
public java.lang.Object getAreCertificateExtensionsRestricted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAutoIncludeAltName`<sup>Required</sup> <a name="isAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName"></a>

```java
public java.lang.Object getIsAutoIncludeAltName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isExpiredCertificateBlocked`<sup>Required</sup> <a name="isExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked"></a>

```java
public java.lang.Object getIsExpiredCertificateBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isOutOfCapacityBlocked`<sup>Required</sup> <a name="isOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked"></a>

```java
public java.lang.Object getIsOutOfCapacityBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRevocationStatusTimeoutBlocked`<sup>Required</sup> <a name="isRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked"></a>

```java
public java.lang.Object getIsRevocationStatusTimeoutBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUnknownRevocationStatusBlocked`<sup>Required</sup> <a name="isUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked"></a>

```java
public java.lang.Object getIsUnknownRevocationStatusBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUnsupportedCipherBlocked`<sup>Required</sup> <a name="isUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked"></a>

```java
public java.lang.Object getIsUnsupportedCipherBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUnsupportedVersionBlocked`<sup>Required</sup> <a name="isUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked"></a>

```java
public java.lang.Object getIsUnsupportedVersionBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUntrustedIssuerBlocked`<sup>Required</sup> <a name="isUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked"></a>

```java
public java.lang.Object getIsUntrustedIssuerBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId"></a>

```java
public java.lang.String getNetworkFirewallPolicyId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_firewall_network_firewall_policy_decryption_profile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig;

NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkFirewallPolicyId(java.lang.String)
    .type(java.lang.String)
//  .areCertificateExtensionsRestricted(java.lang.Boolean)
//  .areCertificateExtensionsRestricted(IResolvable)
//  .id(java.lang.String)
//  .isAutoIncludeAltName(java.lang.Boolean)
//  .isAutoIncludeAltName(IResolvable)
//  .isExpiredCertificateBlocked(java.lang.Boolean)
//  .isExpiredCertificateBlocked(IResolvable)
//  .isOutOfCapacityBlocked(java.lang.Boolean)
//  .isOutOfCapacityBlocked(IResolvable)
//  .isRevocationStatusTimeoutBlocked(java.lang.Boolean)
//  .isRevocationStatusTimeoutBlocked(IResolvable)
//  .isUnknownRevocationStatusBlocked(java.lang.Boolean)
//  .isUnknownRevocationStatusBlocked(IResolvable)
//  .isUnsupportedCipherBlocked(java.lang.Boolean)
//  .isUnsupportedCipherBlocked(IResolvable)
//  .isUnsupportedVersionBlocked(java.lang.Boolean)
//  .isUnsupportedVersionBlocked(IResolvable)
//  .isUntrustedIssuerBlocked(java.lang.Boolean)
//  .isUntrustedIssuerBlocked(IResolvable)
//  .timeouts(NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted">areCertificateExtensionsRestricted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName">isAutoIncludeAltName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked">isExpiredCertificateBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked">isOutOfCapacityBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked">isRevocationStatusTimeoutBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked">isUnknownRevocationStatusBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked">isUnsupportedCipherBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked">isUnsupportedVersionBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked">isUntrustedIssuerBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}.

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId"></a>

```java
public java.lang.String getNetworkFirewallPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}.

---

##### `areCertificateExtensionsRestricted`<sup>Optional</sup> <a name="areCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted"></a>

```java
public java.lang.Object getAreCertificateExtensionsRestricted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutoIncludeAltName`<sup>Optional</sup> <a name="isAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName"></a>

```java
public java.lang.Object getIsAutoIncludeAltName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}.

---

##### `isExpiredCertificateBlocked`<sup>Optional</sup> <a name="isExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked"></a>

```java
public java.lang.Object getIsExpiredCertificateBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}.

---

##### `isOutOfCapacityBlocked`<sup>Optional</sup> <a name="isOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked"></a>

```java
public java.lang.Object getIsOutOfCapacityBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}.

---

##### `isRevocationStatusTimeoutBlocked`<sup>Optional</sup> <a name="isRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked"></a>

```java
public java.lang.Object getIsRevocationStatusTimeoutBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}.

---

##### `isUnknownRevocationStatusBlocked`<sup>Optional</sup> <a name="isUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked"></a>

```java
public java.lang.Object getIsUnknownRevocationStatusBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}.

---

##### `isUnsupportedCipherBlocked`<sup>Optional</sup> <a name="isUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked"></a>

```java
public java.lang.Object getIsUnsupportedCipherBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}.

---

##### `isUnsupportedVersionBlocked`<sup>Optional</sup> <a name="isUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked"></a>

```java
public java.lang.Object getIsUnsupportedVersionBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}.

---

##### `isUntrustedIssuerBlocked`<sup>Optional</sup> <a name="isUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked"></a>

```java
public java.lang.Object getIsUntrustedIssuerBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts"></a>

```java
public NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#timeouts NetworkFirewallNetworkFirewallPolicyDecryptionProfile#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_firewall_network_firewall_policy_decryption_profile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts;

NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_firewall_network_firewall_policy_decryption_profile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference;

new NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

---



