# `dataOciDataSafeSqlFirewallViolationAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallViolationAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallViolationAnalytics <a name="DataOciDataSafeSqlFirewallViolationAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics oci_data_safe_sql_firewall_violation_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalytics;

DataOciDataSafeSqlFirewallViolationAnalytics.Builder.create(Construct scope, java.lang.String id)
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeSqlFirewallViolationAnalyticsFilter>)
//  .groupBy(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .queryTimeZone(java.lang.String)
//  .scimQuery(java.lang.String)
//  .summaryField(java.util.List<java.lang.String>)
//  .timeEnded(java.lang.String)
//  .timeStarted(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#access_level DataOciDataSafeSqlFirewallViolationAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#group_by DataOciDataSafeSqlFirewallViolationAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#id DataOciDataSafeSqlFirewallViolationAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.queryTimeZone">queryTimeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#query_time_zone DataOciDataSafeSqlFirewallViolationAnalytics#query_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.scimQuery">scimQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#scim_query DataOciDataSafeSqlFirewallViolationAnalytics#scim_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.summaryField">summaryField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#summary_field DataOciDataSafeSqlFirewallViolationAnalytics#summary_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_ended DataOciDataSafeSqlFirewallViolationAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_started DataOciDataSafeSqlFirewallViolationAnalytics#time_started}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#access_level DataOciDataSafeSqlFirewallViolationAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#filter DataOciDataSafeSqlFirewallViolationAnalytics#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.groupBy"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#group_by DataOciDataSafeSqlFirewallViolationAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#id DataOciDataSafeSqlFirewallViolationAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryTimeZone`<sup>Optional</sup> <a name="queryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.queryTimeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#query_time_zone DataOciDataSafeSqlFirewallViolationAnalytics#query_time_zone}.

---

##### `scimQuery`<sup>Optional</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.scimQuery"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#scim_query DataOciDataSafeSqlFirewallViolationAnalytics#scim_query}.

---

##### `summaryField`<sup>Optional</sup> <a name="summaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.summaryField"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#summary_field DataOciDataSafeSqlFirewallViolationAnalytics#summary_field}.

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.timeEnded"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_ended DataOciDataSafeSqlFirewallViolationAnalytics#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.timeStarted"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_started DataOciDataSafeSqlFirewallViolationAnalytics#time_started}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetQueryTimeZone">resetQueryTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetScimQuery">resetScimQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetSummaryField">resetSummaryField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeEnded">resetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeStarted">resetTimeStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeSqlFirewallViolationAnalyticsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetId"></a>

```java
public void resetId()
```

##### `resetQueryTimeZone` <a name="resetQueryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetQueryTimeZone"></a>

```java
public void resetQueryTimeZone()
```

##### `resetScimQuery` <a name="resetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetScimQuery"></a>

```java
public void resetScimQuery()
```

##### `resetSummaryField` <a name="resetSummaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetSummaryField"></a>

```java
public void resetSummaryField()
```

##### `resetTimeEnded` <a name="resetTimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeEnded"></a>

```java
public void resetTimeEnded()
```

##### `resetTimeStarted` <a name="resetTimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeStarted"></a>

```java
public void resetTimeStarted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallViolationAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalytics;

DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalytics;

DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalytics;

DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalytics;

DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallViolationAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeSqlFirewallViolationAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeSqlFirewallViolationAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallViolationAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList">DataOciDataSafeSqlFirewallViolationAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.sqlFirewallViolationAnalyticsCollection">sqlFirewallViolationAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupByInput">groupByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZoneInput">queryTimeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQueryInput">scimQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryFieldInput">summaryFieldInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEndedInput">timeEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStartedInput">timeStartedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZone">queryTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQuery">scimQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryField">summaryField</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filter"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList">DataOciDataSafeSqlFirewallViolationAnalyticsFilterList</a>

---

##### `sqlFirewallViolationAnalyticsCollection`<sup>Required</sup> <a name="sqlFirewallViolationAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.sqlFirewallViolationAnalyticsCollection"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList getSqlFirewallViolationAnalyticsCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>>

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupByInput"></a>

```java
public java.util.List<java.lang.String> getGroupByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `queryTimeZoneInput`<sup>Optional</sup> <a name="queryTimeZoneInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZoneInput"></a>

```java
public java.lang.String getQueryTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `scimQueryInput`<sup>Optional</sup> <a name="scimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQueryInput"></a>

```java
public java.lang.String getScimQueryInput();
```

- *Type:* java.lang.String

---

##### `summaryFieldInput`<sup>Optional</sup> <a name="summaryFieldInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryFieldInput"></a>

```java
public java.util.List<java.lang.String> getSummaryFieldInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeEndedInput`<sup>Optional</sup> <a name="timeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEndedInput"></a>

```java
public java.lang.String getTimeEndedInput();
```

- *Type:* java.lang.String

---

##### `timeStartedInput`<sup>Optional</sup> <a name="timeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStartedInput"></a>

```java
public java.lang.String getTimeStartedInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `queryTimeZone`<sup>Required</sup> <a name="queryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZone"></a>

```java
public java.lang.String getQueryTimeZone();
```

- *Type:* java.lang.String

---

##### `scimQuery`<sup>Required</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQuery"></a>

```java
public java.lang.String getScimQuery();
```

- *Type:* java.lang.String

---

##### `summaryField`<sup>Required</sup> <a name="summaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryField"></a>

```java
public java.util.List<java.lang.String> getSummaryField();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallViolationAnalyticsConfig <a name="DataOciDataSafeSqlFirewallViolationAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig;

DataOciDataSafeSqlFirewallViolationAnalyticsConfig.builder()
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeSqlFirewallViolationAnalyticsFilter>)
//  .groupBy(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .queryTimeZone(java.lang.String)
//  .scimQuery(java.lang.String)
//  .summaryField(java.util.List<java.lang.String>)
//  .timeEnded(java.lang.String)
//  .timeStarted(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#access_level DataOciDataSafeSqlFirewallViolationAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#group_by DataOciDataSafeSqlFirewallViolationAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#id DataOciDataSafeSqlFirewallViolationAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.queryTimeZone">queryTimeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#query_time_zone DataOciDataSafeSqlFirewallViolationAnalytics#query_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.scimQuery">scimQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#scim_query DataOciDataSafeSqlFirewallViolationAnalytics#scim_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.summaryField">summaryField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#summary_field DataOciDataSafeSqlFirewallViolationAnalytics#summary_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_ended DataOciDataSafeSqlFirewallViolationAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_started DataOciDataSafeSqlFirewallViolationAnalytics#time_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#access_level DataOciDataSafeSqlFirewallViolationAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#filter DataOciDataSafeSqlFirewallViolationAnalytics#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#group_by DataOciDataSafeSqlFirewallViolationAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#id DataOciDataSafeSqlFirewallViolationAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryTimeZone`<sup>Optional</sup> <a name="queryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.queryTimeZone"></a>

```java
public java.lang.String getQueryTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#query_time_zone DataOciDataSafeSqlFirewallViolationAnalytics#query_time_zone}.

---

##### `scimQuery`<sup>Optional</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.scimQuery"></a>

```java
public java.lang.String getScimQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#scim_query DataOciDataSafeSqlFirewallViolationAnalytics#scim_query}.

---

##### `summaryField`<sup>Optional</sup> <a name="summaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.summaryField"></a>

```java
public java.util.List<java.lang.String> getSummaryField();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#summary_field DataOciDataSafeSqlFirewallViolationAnalytics#summary_field}.

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_ended DataOciDataSafeSqlFirewallViolationAnalytics#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_started DataOciDataSafeSqlFirewallViolationAnalytics#time_started}.

---

### DataOciDataSafeSqlFirewallViolationAnalyticsFilter <a name="DataOciDataSafeSqlFirewallViolationAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter;

DataOciDataSafeSqlFirewallViolationAnalyticsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#name DataOciDataSafeSqlFirewallViolationAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#values DataOciDataSafeSqlFirewallViolationAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#regex DataOciDataSafeSqlFirewallViolationAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#name DataOciDataSafeSqlFirewallViolationAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#values DataOciDataSafeSqlFirewallViolationAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#regex DataOciDataSafeSqlFirewallViolationAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection;

DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection.builder()
    .build();
```


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems;

DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems.builder()
    .build();
```


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions;

DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallViolationAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList;

new DataOciDataSafeSqlFirewallViolationAnalyticsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.get"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>>

---


### DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference;

new DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.get"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientIp">clientIp</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientOsUserName">clientOsUserName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientProgram">clientProgram</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName">dbUserName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operation">operation</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operationTime">operationTime</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel">sqlLevel</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetId">targetId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetName">targetName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction">violationAction</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationCause">violationCause</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIp`<sup>Required</sup> <a name="clientIp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientIp"></a>

```java
public java.util.List<java.lang.String> getClientIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientOsUserName`<sup>Required</sup> <a name="clientOsUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientOsUserName"></a>

```java
public java.util.List<java.lang.String> getClientOsUserName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientProgram`<sup>Required</sup> <a name="clientProgram" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientProgram"></a>

```java
public java.util.List<java.lang.String> getClientProgram();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName"></a>

```java
public java.util.List<java.lang.String> getDbUserName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operation"></a>

```java
public java.util.List<java.lang.String> getOperation();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationTime`<sup>Required</sup> <a name="operationTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operationTime"></a>

```java
public java.util.List<java.lang.String> getOperationTime();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlLevel`<sup>Required</sup> <a name="sqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel"></a>

```java
public java.util.List<java.lang.String> getSqlLevel();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetId"></a>

```java
public java.util.List<java.lang.String> getTargetId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetName"></a>

```java
public java.util.List<java.lang.String> getTargetName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `violationAction`<sup>Required</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction"></a>

```java
public java.util.List<java.lang.String> getViolationAction();
```

- *Type:* java.util.List<java.lang.String>

---

##### `violationCause`<sup>Required</sup> <a name="violationCause" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationCause"></a>

```java
public java.util.List<java.lang.String> getViolationCause();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.get"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.sqlFirewallViolationAnalyticCount">sqlFirewallViolationAnalyticCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList getDimensions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `sqlFirewallViolationAnalyticCount`<sup>Required</sup> <a name="sqlFirewallViolationAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.sqlFirewallViolationAnalyticCount"></a>

```java
public java.lang.String getSqlFirewallViolationAnalyticCount();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.get"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_firewall_violation_analytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection</a>

---



