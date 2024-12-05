# `dataOciAnnouncementsServiceAnnouncementSubscriptions` Submodule <a name="`dataOciAnnouncementsServiceAnnouncementSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptions <a name="DataOciAnnouncementsServiceAnnouncementSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions oci_announcements_service_announcement_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions;

DataOciAnnouncementsServiceAnnouncementSubscriptions.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#compartment_id DataOciAnnouncementsServiceAnnouncementSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#display_name DataOciAnnouncementsServiceAnnouncementSubscriptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#id DataOciAnnouncementsServiceAnnouncementSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#state DataOciAnnouncementsServiceAnnouncementSubscriptions#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#compartment_id DataOciAnnouncementsServiceAnnouncementSubscriptions#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#display_name DataOciAnnouncementsServiceAnnouncementSubscriptions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#filter DataOciAnnouncementsServiceAnnouncementSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#id DataOciAnnouncementsServiceAnnouncementSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#state DataOciAnnouncementsServiceAnnouncementSubscriptions#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions;

DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions;

DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions;

DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions;

DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciAnnouncementsServiceAnnouncementSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciAnnouncementsServiceAnnouncementSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnnouncementsServiceAnnouncementSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.announcementSubscriptionCollection">announcementSubscriptionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `announcementSubscriptionCollection`<sup>Required</sup> <a name="announcementSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.announcementSubscriptionCollection"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList getAnnouncementSubscriptionCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filter"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection;

DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection.builder()
    .build();
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems;

DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems.builder()
    .build();
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups;

DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups.builder()
    .build();
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters;

DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters.builder()
    .build();
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig;

DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#compartment_id DataOciAnnouncementsServiceAnnouncementSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#display_name DataOciAnnouncementsServiceAnnouncementSubscriptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#id DataOciAnnouncementsServiceAnnouncementSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#state DataOciAnnouncementsServiceAnnouncementSubscriptions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#compartment_id DataOciAnnouncementsServiceAnnouncementSubscriptions#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#display_name DataOciAnnouncementsServiceAnnouncementSubscriptions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#filter DataOciAnnouncementsServiceAnnouncementSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#id DataOciAnnouncementsServiceAnnouncementSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#state DataOciAnnouncementsServiceAnnouncementSubscriptions#state}.

---

### DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter;

DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#name DataOciAnnouncementsServiceAnnouncementSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#values DataOciAnnouncementsServiceAnnouncementSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#regex DataOciAnnouncementsServiceAnnouncementSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#name DataOciAnnouncementsServiceAnnouncementSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#values DataOciAnnouncementsServiceAnnouncementSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#regex DataOciAnnouncementsServiceAnnouncementSubscriptions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.get"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.internalValue"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.get"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.filters"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList getFilters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.internalValue"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.get"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.filterGroups">filterGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.onsTopicId">onsTopicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredTimeZone">preferredTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `filterGroups`<sup>Required</sup> <a name="filterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.filterGroups"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList getFilterGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.onsTopicId"></a>

```java
public java.lang.String getOnsTopicId();
```

- *Type:* java.lang.String

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

---

##### `preferredTimeZone`<sup>Required</sup> <a name="preferredTimeZone" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredTimeZone"></a>

```java
public java.lang.String getPreferredTimeZone();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.get"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.items"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.internalValue"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.get"></a>

```java
public DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_announcements_service_announcement_subscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>

---



