# `analyticsAnalyticsInstancePrivateAccessChannel` Submodule <a name="`analyticsAnalyticsInstancePrivateAccessChannel` Submodule" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnalyticsAnalyticsInstancePrivateAccessChannel <a name="AnalyticsAnalyticsInstancePrivateAccessChannel" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel oci_analytics_analytics_instance_private_access_channel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannel;

AnalyticsAnalyticsInstancePrivateAccessChannel.Builder.create(Construct scope, java.lang.String id)
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
    .analyticsInstanceId(java.lang.String)
    .displayName(java.lang.String)
    .privateSourceDnsZones(IResolvable)
    .privateSourceDnsZones(java.util.List<AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones>)
    .subnetId(java.lang.String)
    .vcnId(java.lang.String)
//  .id(java.lang.String)
//  .networkSecurityGroupIds(java.util.List<java.lang.String>)
//  .privateSourceScanHosts(IResolvable)
//  .privateSourceScanHosts(java.util.List<AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts>)
//  .timeouts(AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.analyticsInstanceId">analyticsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#analytics_instance_id AnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#display_name AnalyticsAnalyticsInstancePrivateAccessChannel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.privateSourceDnsZones">privateSourceDnsZones</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>></code> | private_source_dns_zones block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#subnet_id AnalyticsAnalyticsInstancePrivateAccessChannel#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#vcn_id AnalyticsAnalyticsInstancePrivateAccessChannel#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#id AnalyticsAnalyticsInstancePrivateAccessChannel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#network_security_group_ids AnalyticsAnalyticsInstancePrivateAccessChannel#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.privateSourceScanHosts">privateSourceScanHosts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>></code> | private_source_scan_hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts">AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `analyticsInstanceId`<sup>Required</sup> <a name="analyticsInstanceId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.analyticsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#analytics_instance_id AnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#display_name AnalyticsAnalyticsInstancePrivateAccessChannel#display_name}.

---

##### `privateSourceDnsZones`<sup>Required</sup> <a name="privateSourceDnsZones" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.privateSourceDnsZones"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>>

private_source_dns_zones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#private_source_dns_zones AnalyticsAnalyticsInstancePrivateAccessChannel#private_source_dns_zones}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#subnet_id AnalyticsAnalyticsInstancePrivateAccessChannel#subnet_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.vcnId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#vcn_id AnalyticsAnalyticsInstancePrivateAccessChannel#vcn_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#id AnalyticsAnalyticsInstancePrivateAccessChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.networkSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#network_security_group_ids AnalyticsAnalyticsInstancePrivateAccessChannel#network_security_group_ids}.

---

##### `privateSourceScanHosts`<sup>Optional</sup> <a name="privateSourceScanHosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.privateSourceScanHosts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>>

private_source_scan_hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#private_source_scan_hosts AnalyticsAnalyticsInstancePrivateAccessChannel#private_source_scan_hosts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts">AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#timeouts AnalyticsAnalyticsInstancePrivateAccessChannel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.putPrivateSourceDnsZones">putPrivateSourceDnsZones</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.putPrivateSourceScanHosts">putPrivateSourceScanHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetNetworkSecurityGroupIds">resetNetworkSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetPrivateSourceScanHosts">resetPrivateSourceScanHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrivateSourceDnsZones` <a name="putPrivateSourceDnsZones" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.putPrivateSourceDnsZones"></a>

```java
public void putPrivateSourceDnsZones(IResolvable OR java.util.List<AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.putPrivateSourceDnsZones.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>>

---

##### `putPrivateSourceScanHosts` <a name="putPrivateSourceScanHosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.putPrivateSourceScanHosts"></a>

```java
public void putPrivateSourceScanHosts(IResolvable OR java.util.List<AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.putPrivateSourceScanHosts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.putTimeouts"></a>

```java
public void putTimeouts(AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts">AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkSecurityGroupIds` <a name="resetNetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetNetworkSecurityGroupIds"></a>

```java
public void resetNetworkSecurityGroupIds()
```

##### `resetPrivateSourceScanHosts` <a name="resetPrivateSourceScanHosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetPrivateSourceScanHosts"></a>

```java
public void resetPrivateSourceScanHosts()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AnalyticsAnalyticsInstancePrivateAccessChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannel;

AnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannel;

AnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannel;

AnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannel;

AnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AnalyticsAnalyticsInstancePrivateAccessChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AnalyticsAnalyticsInstancePrivateAccessChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AnalyticsAnalyticsInstancePrivateAccessChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AnalyticsAnalyticsInstancePrivateAccessChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.egressSourceIpAddresses">egressSourceIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceDnsZones">privateSourceDnsZones</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceScanHosts">privateSourceScanHosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference">AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceIdInput">analyticsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.networkSecurityGroupIdsInput">networkSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceDnsZonesInput">privateSourceDnsZonesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceScanHostsInput">privateSourceScanHostsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts">AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.vcnIdInput">vcnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceId">analyticsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `egressSourceIpAddresses`<sup>Required</sup> <a name="egressSourceIpAddresses" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.egressSourceIpAddresses"></a>

```java
public java.util.List<java.lang.String> getEgressSourceIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `privateSourceDnsZones`<sup>Required</sup> <a name="privateSourceDnsZones" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceDnsZones"></a>

```java
public AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList getPrivateSourceDnsZones();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList</a>

---

##### `privateSourceScanHosts`<sup>Required</sup> <a name="privateSourceScanHosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceScanHosts"></a>

```java
public AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList getPrivateSourceScanHosts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.timeouts"></a>

```java
public AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference">AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference</a>

---

##### `analyticsInstanceIdInput`<sup>Optional</sup> <a name="analyticsInstanceIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceIdInput"></a>

```java
public java.lang.String getAnalyticsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupIdsInput`<sup>Optional</sup> <a name="networkSecurityGroupIdsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.networkSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateSourceDnsZonesInput`<sup>Optional</sup> <a name="privateSourceDnsZonesInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceDnsZonesInput"></a>

```java
public java.lang.Object getPrivateSourceDnsZonesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>>

---

##### `privateSourceScanHostsInput`<sup>Optional</sup> <a name="privateSourceScanHostsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceScanHostsInput"></a>

```java
public java.lang.Object getPrivateSourceScanHostsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts">AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts</a>

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.vcnIdInput"></a>

```java
public java.lang.String getVcnIdInput();
```

- *Type:* java.lang.String

---

##### `analyticsInstanceId`<sup>Required</sup> <a name="analyticsInstanceId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceId"></a>

```java
public java.lang.String getAnalyticsInstanceId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AnalyticsAnalyticsInstancePrivateAccessChannelConfig <a name="AnalyticsAnalyticsInstancePrivateAccessChannelConfig" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig;

AnalyticsAnalyticsInstancePrivateAccessChannelConfig.builder()
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
    .analyticsInstanceId(java.lang.String)
    .displayName(java.lang.String)
    .privateSourceDnsZones(IResolvable)
    .privateSourceDnsZones(java.util.List<AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones>)
    .subnetId(java.lang.String)
    .vcnId(java.lang.String)
//  .id(java.lang.String)
//  .networkSecurityGroupIds(java.util.List<java.lang.String>)
//  .privateSourceScanHosts(IResolvable)
//  .privateSourceScanHosts(java.util.List<AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts>)
//  .timeouts(AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.analyticsInstanceId">analyticsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#analytics_instance_id AnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#display_name AnalyticsAnalyticsInstancePrivateAccessChannel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.privateSourceDnsZones">privateSourceDnsZones</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>></code> | private_source_dns_zones block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#subnet_id AnalyticsAnalyticsInstancePrivateAccessChannel#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#vcn_id AnalyticsAnalyticsInstancePrivateAccessChannel#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#id AnalyticsAnalyticsInstancePrivateAccessChannel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#network_security_group_ids AnalyticsAnalyticsInstancePrivateAccessChannel#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.privateSourceScanHosts">privateSourceScanHosts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>></code> | private_source_scan_hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts">AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `analyticsInstanceId`<sup>Required</sup> <a name="analyticsInstanceId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.analyticsInstanceId"></a>

```java
public java.lang.String getAnalyticsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#analytics_instance_id AnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#display_name AnalyticsAnalyticsInstancePrivateAccessChannel#display_name}.

---

##### `privateSourceDnsZones`<sup>Required</sup> <a name="privateSourceDnsZones" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.privateSourceDnsZones"></a>

```java
public java.lang.Object getPrivateSourceDnsZones();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>>

private_source_dns_zones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#private_source_dns_zones AnalyticsAnalyticsInstancePrivateAccessChannel#private_source_dns_zones}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#subnet_id AnalyticsAnalyticsInstancePrivateAccessChannel#subnet_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#vcn_id AnalyticsAnalyticsInstancePrivateAccessChannel#vcn_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#id AnalyticsAnalyticsInstancePrivateAccessChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#network_security_group_ids AnalyticsAnalyticsInstancePrivateAccessChannel#network_security_group_ids}.

---

##### `privateSourceScanHosts`<sup>Optional</sup> <a name="privateSourceScanHosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.privateSourceScanHosts"></a>

```java
public java.lang.Object getPrivateSourceScanHosts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>>

private_source_scan_hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#private_source_scan_hosts AnalyticsAnalyticsInstancePrivateAccessChannel#private_source_scan_hosts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.timeouts"></a>

```java
public AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts">AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#timeouts AnalyticsAnalyticsInstancePrivateAccessChannel#timeouts}

---

### AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones <a name="AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones;

AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones.builder()
    .dnsZone(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones.property.dnsZone">dnsZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#dns_zone AnalyticsAnalyticsInstancePrivateAccessChannel#dns_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#description AnalyticsAnalyticsInstancePrivateAccessChannel#description}. |

---

##### `dnsZone`<sup>Required</sup> <a name="dnsZone" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones.property.dnsZone"></a>

```java
public java.lang.String getDnsZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#dns_zone AnalyticsAnalyticsInstancePrivateAccessChannel#dns_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#description AnalyticsAnalyticsInstancePrivateAccessChannel#description}.

---

### AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts <a name="AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts;

AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.builder()
    .scanHostname(java.lang.String)
    .scanPort(java.lang.Number)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.property.scanHostname">scanHostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#scan_hostname AnalyticsAnalyticsInstancePrivateAccessChannel#scan_hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.property.scanPort">scanPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#scan_port AnalyticsAnalyticsInstancePrivateAccessChannel#scan_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#description AnalyticsAnalyticsInstancePrivateAccessChannel#description}. |

---

##### `scanHostname`<sup>Required</sup> <a name="scanHostname" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.property.scanHostname"></a>

```java
public java.lang.String getScanHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#scan_hostname AnalyticsAnalyticsInstancePrivateAccessChannel#scan_hostname}.

---

##### `scanPort`<sup>Required</sup> <a name="scanPort" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.property.scanPort"></a>

```java
public java.lang.Number getScanPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#scan_port AnalyticsAnalyticsInstancePrivateAccessChannel#scan_port}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#description AnalyticsAnalyticsInstancePrivateAccessChannel#description}.

---

### AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts <a name="AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts;

AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#create AnalyticsAnalyticsInstancePrivateAccessChannel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#delete AnalyticsAnalyticsInstancePrivateAccessChannel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#update AnalyticsAnalyticsInstancePrivateAccessChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#create AnalyticsAnalyticsInstancePrivateAccessChannel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#delete AnalyticsAnalyticsInstancePrivateAccessChannel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_private_access_channel#update AnalyticsAnalyticsInstancePrivateAccessChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList <a name="AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList;

new AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.get"></a>

```java
public AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>>

---


### AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference <a name="AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference;

new AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.dnsZoneInput">dnsZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.dnsZone">dnsZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsZoneInput`<sup>Optional</sup> <a name="dnsZoneInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.dnsZoneInput"></a>

```java
public java.lang.String getDnsZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsZone`<sup>Required</sup> <a name="dnsZone" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.dnsZone"></a>

```java
public java.lang.String getDnsZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>

---


### AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList <a name="AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList;

new AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.get"></a>

```java
public AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>>

---


### AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference <a name="AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference;

new AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanHostnameInput">scanHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanPortInput">scanPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanHostname">scanHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanPort">scanPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `scanHostnameInput`<sup>Optional</sup> <a name="scanHostnameInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanHostnameInput"></a>

```java
public java.lang.String getScanHostnameInput();
```

- *Type:* java.lang.String

---

##### `scanPortInput`<sup>Optional</sup> <a name="scanPortInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanPortInput"></a>

```java
public java.lang.Number getScanPortInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `scanHostname`<sup>Required</sup> <a name="scanHostname" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanHostname"></a>

```java
public java.lang.String getScanHostname();
```

- *Type:* java.lang.String

---

##### `scanPort`<sup>Required</sup> <a name="scanPort" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanPort"></a>

```java
public java.lang.Number getScanPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>

---


### AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference <a name="AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.analytics_analytics_instance_private_access_channel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference;

new AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts">AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstancePrivateAccessChannel.AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts">AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts</a>

---



