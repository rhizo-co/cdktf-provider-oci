# `managementAgentManagementAgentDataSource` Submodule <a name="`managementAgentManagementAgentDataSource` Submodule" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementAgentManagementAgentDataSource <a name="ManagementAgentManagementAgentDataSource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source oci_management_agent_management_agent_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSource;

ManagementAgentManagementAgentDataSource.Builder.create(Construct scope, java.lang.String id)
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
    .managementAgentId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .url(java.lang.String)
//  .allowMetrics(java.lang.String)
//  .connectionTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .metricDimensions(IResolvable)
//  .metricDimensions(java.util.List<ManagementAgentManagementAgentDataSourceMetricDimensions>)
//  .namespace(java.lang.String)
//  .proxyUrl(java.lang.String)
//  .readDataLimitInKilobytes(java.lang.Number)
//  .readTimeout(java.lang.Number)
//  .resourceGroup(java.lang.String)
//  .scheduleMins(java.lang.Number)
//  .timeouts(ManagementAgentManagementAgentDataSourceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.allowMetrics">allowMetrics</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.metricDimensions">metricDimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>></code> | metric_dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.readDataLimitInKilobytes">readDataLimitInKilobytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.readTimeout">readTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scheduleMins">scheduleMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}.

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.managementAgentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}.

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}.

---

##### `allowMetrics`<sup>Optional</sup> <a name="allowMetrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.allowMetrics"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}.

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.connectionTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricDimensions`<sup>Optional</sup> <a name="metricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.metricDimensions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>>

metric_dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#metric_dimensions ManagementAgentManagementAgentDataSource#metric_dimensions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}.

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.proxyUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}.

---

##### `readDataLimitInKilobytes`<sup>Optional</sup> <a name="readDataLimitInKilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.readDataLimitInKilobytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}.

---

##### `readTimeout`<sup>Optional</sup> <a name="readTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.readTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.resourceGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}.

---

##### `scheduleMins`<sup>Optional</sup> <a name="scheduleMins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scheduleMins"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#timeouts ManagementAgentManagementAgentDataSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putMetricDimensions">putMetricDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetAllowMetrics">resetAllowMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetConnectionTimeout">resetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetMetricDimensions">resetMetricDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetProxyUrl">resetProxyUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadDataLimitInKilobytes">resetReadDataLimitInKilobytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadTimeout">resetReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetScheduleMins">resetScheduleMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricDimensions` <a name="putMetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putMetricDimensions"></a>

```java
public void putMetricDimensions(IResolvable OR java.util.List<ManagementAgentManagementAgentDataSourceMetricDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putMetricDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts"></a>

```java
public void putTimeouts(ManagementAgentManagementAgentDataSourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>

---

##### `resetAllowMetrics` <a name="resetAllowMetrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetAllowMetrics"></a>

```java
public void resetAllowMetrics()
```

##### `resetConnectionTimeout` <a name="resetConnectionTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetConnectionTimeout"></a>

```java
public void resetConnectionTimeout()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetId"></a>

```java
public void resetId()
```

##### `resetMetricDimensions` <a name="resetMetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetMetricDimensions"></a>

```java
public void resetMetricDimensions()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetProxyUrl"></a>

```java
public void resetProxyUrl()
```

##### `resetReadDataLimitInKilobytes` <a name="resetReadDataLimitInKilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadDataLimitInKilobytes"></a>

```java
public void resetReadDataLimitInKilobytes()
```

##### `resetReadTimeout` <a name="resetReadTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadTimeout"></a>

```java
public void resetReadTimeout()
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetScheduleMins` <a name="resetScheduleMins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetScheduleMins"></a>

```java
public void resetScheduleMins()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSource;

ManagementAgentManagementAgentDataSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSource;

ManagementAgentManagementAgentDataSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSource;

ManagementAgentManagementAgentDataSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSource;

ManagementAgentManagementAgentDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagementAgentManagementAgentDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagementAgentManagementAgentDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagementAgentManagementAgentDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagementAgentManagementAgentDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dataSourceKey">dataSourceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.isDaemonSet">isDaemonSet</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensions">metricDimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList">ManagementAgentManagementAgentDataSourceMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimit">readDataLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference">ManagementAgentManagementAgentDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetricsInput">allowMetricsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeoutInput">connectionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensionsInput">metricDimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrlInput">proxyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytesInput">readDataLimitInKilobytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeoutInput">readTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMinsInput">scheduleMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetrics">allowMetrics</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes">readDataLimitInKilobytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeout">readTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMins">scheduleMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceKey`<sup>Required</sup> <a name="dataSourceKey" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dataSourceKey"></a>

```java
public java.lang.String getDataSourceKey();
```

- *Type:* java.lang.String

---

##### `isDaemonSet`<sup>Required</sup> <a name="isDaemonSet" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.isDaemonSet"></a>

```java
public IResolvable getIsDaemonSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `metricDimensions`<sup>Required</sup> <a name="metricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensions"></a>

```java
public ManagementAgentManagementAgentDataSourceMetricDimensionsList getMetricDimensions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList">ManagementAgentManagementAgentDataSourceMetricDimensionsList</a>

---

##### `readDataLimit`<sup>Required</sup> <a name="readDataLimit" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimit"></a>

```java
public java.lang.Number getReadDataLimit();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeouts"></a>

```java
public ManagementAgentManagementAgentDataSourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference">ManagementAgentManagementAgentDataSourceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `allowMetricsInput`<sup>Optional</sup> <a name="allowMetricsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetricsInput"></a>

```java
public java.lang.String getAllowMetricsInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `connectionTimeoutInput`<sup>Optional</sup> <a name="connectionTimeoutInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeoutInput"></a>

```java
public java.lang.Number getConnectionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentIdInput"></a>

```java
public java.lang.String getManagementAgentIdInput();
```

- *Type:* java.lang.String

---

##### `metricDimensionsInput`<sup>Optional</sup> <a name="metricDimensionsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensionsInput"></a>

```java
public java.lang.Object getMetricDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrlInput"></a>

```java
public java.lang.String getProxyUrlInput();
```

- *Type:* java.lang.String

---

##### `readDataLimitInKilobytesInput`<sup>Optional</sup> <a name="readDataLimitInKilobytesInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytesInput"></a>

```java
public java.lang.Number getReadDataLimitInKilobytesInput();
```

- *Type:* java.lang.Number

---

##### `readTimeoutInput`<sup>Optional</sup> <a name="readTimeoutInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeoutInput"></a>

```java
public java.lang.Number getReadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `scheduleMinsInput`<sup>Optional</sup> <a name="scheduleMinsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMinsInput"></a>

```java
public java.lang.Number getScheduleMinsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `allowMetrics`<sup>Required</sup> <a name="allowMetrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetrics"></a>

```java
public java.lang.String getAllowMetrics();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeout"></a>

```java
public java.lang.Number getConnectionTimeout();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrl"></a>

```java
public java.lang.String getProxyUrl();
```

- *Type:* java.lang.String

---

##### `readDataLimitInKilobytes`<sup>Required</sup> <a name="readDataLimitInKilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes"></a>

```java
public java.lang.Number getReadDataLimitInKilobytes();
```

- *Type:* java.lang.Number

---

##### `readTimeout`<sup>Required</sup> <a name="readTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeout"></a>

```java
public java.lang.Number getReadTimeout();
```

- *Type:* java.lang.Number

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `scheduleMins`<sup>Required</sup> <a name="scheduleMins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMins"></a>

```java
public java.lang.Number getScheduleMins();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementAgentManagementAgentDataSourceConfig <a name="ManagementAgentManagementAgentDataSourceConfig" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSourceConfig;

ManagementAgentManagementAgentDataSourceConfig.builder()
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
    .managementAgentId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .url(java.lang.String)
//  .allowMetrics(java.lang.String)
//  .connectionTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .metricDimensions(IResolvable)
//  .metricDimensions(java.util.List<ManagementAgentManagementAgentDataSourceMetricDimensions>)
//  .namespace(java.lang.String)
//  .proxyUrl(java.lang.String)
//  .readDataLimitInKilobytes(java.lang.Number)
//  .readTimeout(java.lang.Number)
//  .resourceGroup(java.lang.String)
//  .scheduleMins(java.lang.Number)
//  .timeouts(ManagementAgentManagementAgentDataSourceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.allowMetrics">allowMetrics</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.metricDimensions">metricDimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>></code> | metric_dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readDataLimitInKilobytes">readDataLimitInKilobytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readTimeout">readTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.scheduleMins">scheduleMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}.

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}.

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}.

---

##### `allowMetrics`<sup>Optional</sup> <a name="allowMetrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.allowMetrics"></a>

```java
public java.lang.String getAllowMetrics();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}.

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connectionTimeout"></a>

```java
public java.lang.Number getConnectionTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricDimensions`<sup>Optional</sup> <a name="metricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.metricDimensions"></a>

```java
public java.lang.Object getMetricDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>>

metric_dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#metric_dimensions ManagementAgentManagementAgentDataSource#metric_dimensions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}.

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.proxyUrl"></a>

```java
public java.lang.String getProxyUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}.

---

##### `readDataLimitInKilobytes`<sup>Optional</sup> <a name="readDataLimitInKilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readDataLimitInKilobytes"></a>

```java
public java.lang.Number getReadDataLimitInKilobytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}.

---

##### `readTimeout`<sup>Optional</sup> <a name="readTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readTimeout"></a>

```java
public java.lang.Number getReadTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}.

---

##### `scheduleMins`<sup>Optional</sup> <a name="scheduleMins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.scheduleMins"></a>

```java
public java.lang.Number getScheduleMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.timeouts"></a>

```java
public ManagementAgentManagementAgentDataSourceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#timeouts ManagementAgentManagementAgentDataSource#timeouts}

---

### ManagementAgentManagementAgentDataSourceMetricDimensions <a name="ManagementAgentManagementAgentDataSourceMetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSourceMetricDimensions;

ManagementAgentManagementAgentDataSourceMetricDimensions.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#value ManagementAgentManagementAgentDataSource#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#value ManagementAgentManagementAgentDataSource#value}.

---

### ManagementAgentManagementAgentDataSourceTimeouts <a name="ManagementAgentManagementAgentDataSourceTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSourceTimeouts;

ManagementAgentManagementAgentDataSourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#create ManagementAgentManagementAgentDataSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#delete ManagementAgentManagementAgentDataSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#update ManagementAgentManagementAgentDataSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#create ManagementAgentManagementAgentDataSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#delete ManagementAgentManagementAgentDataSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#update ManagementAgentManagementAgentDataSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementAgentManagementAgentDataSourceMetricDimensionsList <a name="ManagementAgentManagementAgentDataSourceMetricDimensionsList" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSourceMetricDimensionsList;

new ManagementAgentManagementAgentDataSourceMetricDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.get"></a>

```java
public ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>>

---


### ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference <a name="ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference;

new ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>

---


### ManagementAgentManagementAgentDataSourceTimeoutsOutputReference <a name="ManagementAgentManagementAgentDataSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.management_agent_management_agent_data_source.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference;

new ManagementAgentManagementAgentDataSourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>

---



