# `dataOciDnsSteeringPolicyAttachments` Submodule <a name="`dataOciDnsSteeringPolicyAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDnsSteeringPolicyAttachments <a name="DataOciDnsSteeringPolicyAttachments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments oci_dns_steering_policy_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachments;

DataOciDnsSteeringPolicyAttachments.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .domain(java.lang.String)
//  .domainContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDnsSteeringPolicyAttachmentsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .steeringPolicyId(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#compartment_id DataOciDnsSteeringPolicyAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#display_name DataOciDnsSteeringPolicyAttachments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain DataOciDnsSteeringPolicyAttachments#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.domainContains">domainContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain_contains DataOciDnsSteeringPolicyAttachments#domain_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#id DataOciDnsSteeringPolicyAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#state DataOciDnsSteeringPolicyAttachments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.steeringPolicyId">steeringPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#steering_policy_id DataOciDnsSteeringPolicyAttachments#steering_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicyAttachments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_less_than DataOciDnsSteeringPolicyAttachments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#zone_id DataOciDnsSteeringPolicyAttachments#zone_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#compartment_id DataOciDnsSteeringPolicyAttachments#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#display_name DataOciDnsSteeringPolicyAttachments#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain DataOciDnsSteeringPolicyAttachments#domain}.

---

##### `domainContains`<sup>Optional</sup> <a name="domainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.domainContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain_contains DataOciDnsSteeringPolicyAttachments#domain_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#filter DataOciDnsSteeringPolicyAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#id DataOciDnsSteeringPolicyAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#state DataOciDnsSteeringPolicyAttachments#state}.

---

##### `steeringPolicyId`<sup>Optional</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.steeringPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#steering_policy_id DataOciDnsSteeringPolicyAttachments#steering_policy_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicyAttachments#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_less_than DataOciDnsSteeringPolicyAttachments#time_created_less_than}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#zone_id DataOciDnsSteeringPolicyAttachments#zone_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomainContains">resetDomainContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetSteeringPolicyId">resetSteeringPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDnsSteeringPolicyAttachmentsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetDomainContains` <a name="resetDomainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomainContains"></a>

```java
public void resetDomainContains()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetState"></a>

```java
public void resetState()
```

##### `resetSteeringPolicyId` <a name="resetSteeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetSteeringPolicyId"></a>

```java
public void resetSteeringPolicyId()
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedGreaterThanOrEqualTo"></a>

```java
public void resetTimeCreatedGreaterThanOrEqualTo()
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedLessThan"></a>

```java
public void resetTimeCreatedLessThan()
```

##### `resetZoneId` <a name="resetZoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDnsSteeringPolicyAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachments;

DataOciDnsSteeringPolicyAttachments.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachments;

DataOciDnsSteeringPolicyAttachments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachments;

DataOciDnsSteeringPolicyAttachments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachments;

DataOciDnsSteeringPolicyAttachments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDnsSteeringPolicyAttachments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDnsSteeringPolicyAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDnsSteeringPolicyAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDnsSteeringPolicyAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDnsSteeringPolicyAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList">DataOciDnsSteeringPolicyAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyAttachments">steeringPolicyAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContainsInput">domainContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyIdInput">steeringPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContains">domainContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyId">steeringPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filter"></a>

```java
public DataOciDnsSteeringPolicyAttachmentsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList">DataOciDnsSteeringPolicyAttachmentsFilterList</a>

---

##### `steeringPolicyAttachments`<sup>Required</sup> <a name="steeringPolicyAttachments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyAttachments"></a>

```java
public DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList getSteeringPolicyAttachments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainContainsInput`<sup>Optional</sup> <a name="domainContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContainsInput"></a>

```java
public java.lang.String getDomainContainsInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `steeringPolicyIdInput`<sup>Optional</sup> <a name="steeringPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyIdInput"></a>

```java
public java.lang.String getSteeringPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThanInput"></a>

```java
public java.lang.String getTimeCreatedLessThanInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domainContains`<sup>Required</sup> <a name="domainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContains"></a>

```java
public java.lang.String getDomainContains();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `steeringPolicyId`<sup>Required</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyId"></a>

```java
public java.lang.String getSteeringPolicyId();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDnsSteeringPolicyAttachmentsConfig <a name="DataOciDnsSteeringPolicyAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachmentsConfig;

DataOciDnsSteeringPolicyAttachmentsConfig.builder()
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
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .domain(java.lang.String)
//  .domainContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDnsSteeringPolicyAttachmentsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .steeringPolicyId(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#compartment_id DataOciDnsSteeringPolicyAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#display_name DataOciDnsSteeringPolicyAttachments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain DataOciDnsSteeringPolicyAttachments#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domainContains">domainContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain_contains DataOciDnsSteeringPolicyAttachments#domain_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#id DataOciDnsSteeringPolicyAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#state DataOciDnsSteeringPolicyAttachments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.steeringPolicyId">steeringPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#steering_policy_id DataOciDnsSteeringPolicyAttachments#steering_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicyAttachments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_less_than DataOciDnsSteeringPolicyAttachments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#zone_id DataOciDnsSteeringPolicyAttachments#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#compartment_id DataOciDnsSteeringPolicyAttachments#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#display_name DataOciDnsSteeringPolicyAttachments#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain DataOciDnsSteeringPolicyAttachments#domain}.

---

##### `domainContains`<sup>Optional</sup> <a name="domainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domainContains"></a>

```java
public java.lang.String getDomainContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain_contains DataOciDnsSteeringPolicyAttachments#domain_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#filter DataOciDnsSteeringPolicyAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#id DataOciDnsSteeringPolicyAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#state DataOciDnsSteeringPolicyAttachments#state}.

---

##### `steeringPolicyId`<sup>Optional</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.steeringPolicyId"></a>

```java
public java.lang.String getSteeringPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#steering_policy_id DataOciDnsSteeringPolicyAttachments#steering_policy_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicyAttachments#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_less_than DataOciDnsSteeringPolicyAttachments#time_created_less_than}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#zone_id DataOciDnsSteeringPolicyAttachments#zone_id}.

---

### DataOciDnsSteeringPolicyAttachmentsFilter <a name="DataOciDnsSteeringPolicyAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachmentsFilter;

DataOciDnsSteeringPolicyAttachmentsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#name DataOciDnsSteeringPolicyAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#values DataOciDnsSteeringPolicyAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#regex DataOciDnsSteeringPolicyAttachments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#name DataOciDnsSteeringPolicyAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#values DataOciDnsSteeringPolicyAttachments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#regex DataOciDnsSteeringPolicyAttachments#regex}.

---

### DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments <a name="DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments;

DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDnsSteeringPolicyAttachmentsFilterList <a name="DataOciDnsSteeringPolicyAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachmentsFilterList;

new DataOciDnsSteeringPolicyAttachmentsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.get"></a>

```java
public DataOciDnsSteeringPolicyAttachmentsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>>

---


### DataOciDnsSteeringPolicyAttachmentsFilterOutputReference <a name="DataOciDnsSteeringPolicyAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference;

new DataOciDnsSteeringPolicyAttachmentsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>

---


### DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList <a name="DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList;

new DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.get"></a>

```java
public DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference <a name="DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy_attachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference;

new DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.rtypes">rtypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.steeringPolicyId">steeringPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rtypes`<sup>Required</sup> <a name="rtypes" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.rtypes"></a>

```java
public java.util.List<java.lang.String> getRtypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.selfAttribute"></a>

```java
public java.lang.String getSelfAttribute();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `steeringPolicyId`<sup>Required</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.steeringPolicyId"></a>

```java
public java.lang.String getSteeringPolicyId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.internalValue"></a>

```java
public DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments</a>

---



