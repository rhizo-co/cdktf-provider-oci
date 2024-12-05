# `dataSafeSqlFirewallPolicy` Submodule <a name="`dataSafeSqlFirewallPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSqlFirewallPolicy <a name="DataSafeSqlFirewallPolicy" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy oci_data_safe_sql_firewall_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sql_firewall_policy.DataSafeSqlFirewallPolicy;

DataSafeSqlFirewallPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .sqlFirewallPolicyId(java.lang.String)
//  .allowedClientIps(java.util.List<java.lang.String>)
//  .allowedClientOsUsernames(java.util.List<java.lang.String>)
//  .allowedClientPrograms(java.util.List<java.lang.String>)
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .enforcementScope(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(DataSafeSqlFirewallPolicyTimeouts)
//  .violationAction(java.lang.String)
//  .violationAudit(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataSafeSqlFirewallPolicy#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.allowedClientIps">allowedClientIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_ips DataSafeSqlFirewallPolicy#allowed_client_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.allowedClientOsUsernames">allowedClientOsUsernames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_os_usernames DataSafeSqlFirewallPolicy#allowed_client_os_usernames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.allowedClientPrograms">allowedClientPrograms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_programs DataSafeSqlFirewallPolicy#allowed_client_programs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#compartment_id DataSafeSqlFirewallPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#defined_tags DataSafeSqlFirewallPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#description DataSafeSqlFirewallPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#display_name DataSafeSqlFirewallPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.enforcementScope">enforcementScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#enforcement_scope DataSafeSqlFirewallPolicy#enforcement_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#freeform_tags DataSafeSqlFirewallPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#id DataSafeSqlFirewallPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#status DataSafeSqlFirewallPolicy#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.violationAction">violationAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_action DataSafeSqlFirewallPolicy#violation_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.violationAudit">violationAudit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_audit DataSafeSqlFirewallPolicy#violation_audit}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sqlFirewallPolicyId`<sup>Required</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.sqlFirewallPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataSafeSqlFirewallPolicy#sql_firewall_policy_id}.

---

##### `allowedClientIps`<sup>Optional</sup> <a name="allowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.allowedClientIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_ips DataSafeSqlFirewallPolicy#allowed_client_ips}.

---

##### `allowedClientOsUsernames`<sup>Optional</sup> <a name="allowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.allowedClientOsUsernames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_os_usernames DataSafeSqlFirewallPolicy#allowed_client_os_usernames}.

---

##### `allowedClientPrograms`<sup>Optional</sup> <a name="allowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.allowedClientPrograms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_programs DataSafeSqlFirewallPolicy#allowed_client_programs}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#compartment_id DataSafeSqlFirewallPolicy#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#defined_tags DataSafeSqlFirewallPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#description DataSafeSqlFirewallPolicy#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#display_name DataSafeSqlFirewallPolicy#display_name}.

---

##### `enforcementScope`<sup>Optional</sup> <a name="enforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.enforcementScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#enforcement_scope DataSafeSqlFirewallPolicy#enforcement_scope}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#freeform_tags DataSafeSqlFirewallPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#id DataSafeSqlFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#status DataSafeSqlFirewallPolicy#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#timeouts DataSafeSqlFirewallPolicy#timeouts}

---

##### `violationAction`<sup>Optional</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.violationAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_action DataSafeSqlFirewallPolicy#violation_action}.

---

##### `violationAudit`<sup>Optional</sup> <a name="violationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.violationAudit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_audit DataSafeSqlFirewallPolicy#violation_audit}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientIps">resetAllowedClientIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientOsUsernames">resetAllowedClientOsUsernames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientPrograms">resetAllowedClientPrograms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetEnforcementScope">resetEnforcementScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAction">resetViolationAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAudit">resetViolationAudit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.putTimeouts"></a>

```java
public void putTimeouts(DataSafeSqlFirewallPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a>

---

##### `resetAllowedClientIps` <a name="resetAllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientIps"></a>

```java
public void resetAllowedClientIps()
```

##### `resetAllowedClientOsUsernames` <a name="resetAllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientOsUsernames"></a>

```java
public void resetAllowedClientOsUsernames()
```

##### `resetAllowedClientPrograms` <a name="resetAllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientPrograms"></a>

```java
public void resetAllowedClientPrograms()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnforcementScope` <a name="resetEnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetEnforcementScope"></a>

```java
public void resetEnforcementScope()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetViolationAction` <a name="resetViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAction"></a>

```java
public void resetViolationAction()
```

##### `resetViolationAudit` <a name="resetViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAudit"></a>

```java
public void resetViolationAudit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSqlFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sql_firewall_policy.DataSafeSqlFirewallPolicy;

DataSafeSqlFirewallPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sql_firewall_policy.DataSafeSqlFirewallPolicy;

DataSafeSqlFirewallPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sql_firewall_policy.DataSafeSqlFirewallPolicy;

DataSafeSqlFirewallPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sql_firewall_policy.DataSafeSqlFirewallPolicy;

DataSafeSqlFirewallPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeSqlFirewallPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeSqlFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeSqlFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeSqlFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSqlFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dbUserName">dbUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.securityPolicyId">securityPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlLevel">sqlLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference">DataSafeSqlFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIpsInput">allowedClientIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernamesInput">allowedClientOsUsernamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientProgramsInput">allowedClientProgramsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScopeInput">enforcementScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyIdInput">sqlFirewallPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationActionInput">violationActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAuditInput">violationAuditInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIps">allowedClientIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernames">allowedClientOsUsernames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientPrograms">allowedClientPrograms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScope">enforcementScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAction">violationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAudit">violationAudit</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dbUserName"></a>

```java
public java.lang.String getDbUserName();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `securityPolicyId`<sup>Required</sup> <a name="securityPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.securityPolicyId"></a>

```java
public java.lang.String getSecurityPolicyId();
```

- *Type:* java.lang.String

---

##### `sqlLevel`<sup>Required</sup> <a name="sqlLevel" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlLevel"></a>

```java
public java.lang.String getSqlLevel();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeouts"></a>

```java
public DataSafeSqlFirewallPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference">DataSafeSqlFirewallPolicyTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `allowedClientIpsInput`<sup>Optional</sup> <a name="allowedClientIpsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIpsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClientOsUsernamesInput`<sup>Optional</sup> <a name="allowedClientOsUsernamesInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernamesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientOsUsernamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClientProgramsInput`<sup>Optional</sup> <a name="allowedClientProgramsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientProgramsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientProgramsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enforcementScopeInput`<sup>Optional</sup> <a name="enforcementScopeInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScopeInput"></a>

```java
public java.lang.String getEnforcementScopeInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sqlFirewallPolicyIdInput`<sup>Optional</sup> <a name="sqlFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyIdInput"></a>

```java
public java.lang.String getSqlFirewallPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a>

---

##### `violationActionInput`<sup>Optional</sup> <a name="violationActionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationActionInput"></a>

```java
public java.lang.String getViolationActionInput();
```

- *Type:* java.lang.String

---

##### `violationAuditInput`<sup>Optional</sup> <a name="violationAuditInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAuditInput"></a>

```java
public java.lang.String getViolationAuditInput();
```

- *Type:* java.lang.String

---

##### `allowedClientIps`<sup>Required</sup> <a name="allowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIps"></a>

```java
public java.util.List<java.lang.String> getAllowedClientIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClientOsUsernames`<sup>Required</sup> <a name="allowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernames"></a>

```java
public java.util.List<java.lang.String> getAllowedClientOsUsernames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClientPrograms`<sup>Required</sup> <a name="allowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientPrograms"></a>

```java
public java.util.List<java.lang.String> getAllowedClientPrograms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enforcementScope`<sup>Required</sup> <a name="enforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScope"></a>

```java
public java.lang.String getEnforcementScope();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sqlFirewallPolicyId`<sup>Required</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyId"></a>

```java
public java.lang.String getSqlFirewallPolicyId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `violationAction`<sup>Required</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAction"></a>

```java
public java.lang.String getViolationAction();
```

- *Type:* java.lang.String

---

##### `violationAudit`<sup>Required</sup> <a name="violationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAudit"></a>

```java
public java.lang.String getViolationAudit();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSqlFirewallPolicyConfig <a name="DataSafeSqlFirewallPolicyConfig" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sql_firewall_policy.DataSafeSqlFirewallPolicyConfig;

DataSafeSqlFirewallPolicyConfig.builder()
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
    .sqlFirewallPolicyId(java.lang.String)
//  .allowedClientIps(java.util.List<java.lang.String>)
//  .allowedClientOsUsernames(java.util.List<java.lang.String>)
//  .allowedClientPrograms(java.util.List<java.lang.String>)
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .enforcementScope(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(DataSafeSqlFirewallPolicyTimeouts)
//  .violationAction(java.lang.String)
//  .violationAudit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataSafeSqlFirewallPolicy#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientIps">allowedClientIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_ips DataSafeSqlFirewallPolicy#allowed_client_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientOsUsernames">allowedClientOsUsernames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_os_usernames DataSafeSqlFirewallPolicy#allowed_client_os_usernames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientPrograms">allowedClientPrograms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_programs DataSafeSqlFirewallPolicy#allowed_client_programs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#compartment_id DataSafeSqlFirewallPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#defined_tags DataSafeSqlFirewallPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#description DataSafeSqlFirewallPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#display_name DataSafeSqlFirewallPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.enforcementScope">enforcementScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#enforcement_scope DataSafeSqlFirewallPolicy#enforcement_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#freeform_tags DataSafeSqlFirewallPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#id DataSafeSqlFirewallPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#status DataSafeSqlFirewallPolicy#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAction">violationAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_action DataSafeSqlFirewallPolicy#violation_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAudit">violationAudit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_audit DataSafeSqlFirewallPolicy#violation_audit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sqlFirewallPolicyId`<sup>Required</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.sqlFirewallPolicyId"></a>

```java
public java.lang.String getSqlFirewallPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataSafeSqlFirewallPolicy#sql_firewall_policy_id}.

---

##### `allowedClientIps`<sup>Optional</sup> <a name="allowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientIps"></a>

```java
public java.util.List<java.lang.String> getAllowedClientIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_ips DataSafeSqlFirewallPolicy#allowed_client_ips}.

---

##### `allowedClientOsUsernames`<sup>Optional</sup> <a name="allowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientOsUsernames"></a>

```java
public java.util.List<java.lang.String> getAllowedClientOsUsernames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_os_usernames DataSafeSqlFirewallPolicy#allowed_client_os_usernames}.

---

##### `allowedClientPrograms`<sup>Optional</sup> <a name="allowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientPrograms"></a>

```java
public java.util.List<java.lang.String> getAllowedClientPrograms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_programs DataSafeSqlFirewallPolicy#allowed_client_programs}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#compartment_id DataSafeSqlFirewallPolicy#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#defined_tags DataSafeSqlFirewallPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#description DataSafeSqlFirewallPolicy#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#display_name DataSafeSqlFirewallPolicy#display_name}.

---

##### `enforcementScope`<sup>Optional</sup> <a name="enforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.enforcementScope"></a>

```java
public java.lang.String getEnforcementScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#enforcement_scope DataSafeSqlFirewallPolicy#enforcement_scope}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#freeform_tags DataSafeSqlFirewallPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#id DataSafeSqlFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#status DataSafeSqlFirewallPolicy#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.timeouts"></a>

```java
public DataSafeSqlFirewallPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#timeouts DataSafeSqlFirewallPolicy#timeouts}

---

##### `violationAction`<sup>Optional</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAction"></a>

```java
public java.lang.String getViolationAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_action DataSafeSqlFirewallPolicy#violation_action}.

---

##### `violationAudit`<sup>Optional</sup> <a name="violationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAudit"></a>

```java
public java.lang.String getViolationAudit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_audit DataSafeSqlFirewallPolicy#violation_audit}.

---

### DataSafeSqlFirewallPolicyTimeouts <a name="DataSafeSqlFirewallPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sql_firewall_policy.DataSafeSqlFirewallPolicyTimeouts;

DataSafeSqlFirewallPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#create DataSafeSqlFirewallPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#delete DataSafeSqlFirewallPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#update DataSafeSqlFirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#create DataSafeSqlFirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#delete DataSafeSqlFirewallPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#update DataSafeSqlFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSqlFirewallPolicyTimeoutsOutputReference <a name="DataSafeSqlFirewallPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sql_firewall_policy.DataSafeSqlFirewallPolicyTimeoutsOutputReference;

new DataSafeSqlFirewallPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a>

---



