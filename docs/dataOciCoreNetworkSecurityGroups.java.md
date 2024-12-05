# `dataOciCoreNetworkSecurityGroups` Submodule <a name="`dataOciCoreNetworkSecurityGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreNetworkSecurityGroups <a name="DataOciCoreNetworkSecurityGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups oci_core_network_security_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroups;

DataOciCoreNetworkSecurityGroups.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreNetworkSecurityGroupsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .vcnId(java.lang.String)
//  .vlanId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#compartment_id DataOciCoreNetworkSecurityGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#display_name DataOciCoreNetworkSecurityGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#id DataOciCoreNetworkSecurityGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#state DataOciCoreNetworkSecurityGroups#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vcn_id DataOciCoreNetworkSecurityGroups#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.vlanId">vlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vlan_id DataOciCoreNetworkSecurityGroups#vlan_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#compartment_id DataOciCoreNetworkSecurityGroups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#display_name DataOciCoreNetworkSecurityGroups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#filter DataOciCoreNetworkSecurityGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#id DataOciCoreNetworkSecurityGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#state DataOciCoreNetworkSecurityGroups#state}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.vcnId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vcn_id DataOciCoreNetworkSecurityGroups#vcn_id}.

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.vlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vlan_id DataOciCoreNetworkSecurityGroups#vlan_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetVcnId">resetVcnId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreNetworkSecurityGroupsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetState"></a>

```java
public void resetState()
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetVcnId"></a>

```java
public void resetVcnId()
```

##### `resetVlanId` <a name="resetVlanId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetVlanId"></a>

```java
public void resetVlanId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroups;

DataOciCoreNetworkSecurityGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroups;

DataOciCoreNetworkSecurityGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroups;

DataOciCoreNetworkSecurityGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroups;

DataOciCoreNetworkSecurityGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreNetworkSecurityGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreNetworkSecurityGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreNetworkSecurityGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreNetworkSecurityGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList">DataOciCoreNetworkSecurityGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.networkSecurityGroups">networkSecurityGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList">DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vcnIdInput">vcnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.filter"></a>

```java
public DataOciCoreNetworkSecurityGroupsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList">DataOciCoreNetworkSecurityGroupsFilterList</a>

---

##### `networkSecurityGroups`<sup>Required</sup> <a name="networkSecurityGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.networkSecurityGroups"></a>

```java
public DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList getNetworkSecurityGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList">DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vcnIdInput"></a>

```java
public java.lang.String getVcnIdInput();
```

- *Type:* java.lang.String

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vlanIdInput"></a>

```java
public java.lang.String getVlanIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreNetworkSecurityGroupsConfig <a name="DataOciCoreNetworkSecurityGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroupsConfig;

DataOciCoreNetworkSecurityGroupsConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreNetworkSecurityGroupsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .vcnId(java.lang.String)
//  .vlanId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#compartment_id DataOciCoreNetworkSecurityGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#display_name DataOciCoreNetworkSecurityGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#id DataOciCoreNetworkSecurityGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#state DataOciCoreNetworkSecurityGroups#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vcn_id DataOciCoreNetworkSecurityGroups#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vlan_id DataOciCoreNetworkSecurityGroups#vlan_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#compartment_id DataOciCoreNetworkSecurityGroups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#display_name DataOciCoreNetworkSecurityGroups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#filter DataOciCoreNetworkSecurityGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#id DataOciCoreNetworkSecurityGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#state DataOciCoreNetworkSecurityGroups#state}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vcn_id DataOciCoreNetworkSecurityGroups#vcn_id}.

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vlan_id DataOciCoreNetworkSecurityGroups#vlan_id}.

---

### DataOciCoreNetworkSecurityGroupsFilter <a name="DataOciCoreNetworkSecurityGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroupsFilter;

DataOciCoreNetworkSecurityGroupsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#name DataOciCoreNetworkSecurityGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#values DataOciCoreNetworkSecurityGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#regex DataOciCoreNetworkSecurityGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#name DataOciCoreNetworkSecurityGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#values DataOciCoreNetworkSecurityGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#regex DataOciCoreNetworkSecurityGroups#regex}.

---

### DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups <a name="DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups;

DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreNetworkSecurityGroupsFilterList <a name="DataOciCoreNetworkSecurityGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroupsFilterList;

new DataOciCoreNetworkSecurityGroupsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>>

---


### DataOciCoreNetworkSecurityGroupsFilterOutputReference <a name="DataOciCoreNetworkSecurityGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroupsFilterOutputReference;

new DataOciCoreNetworkSecurityGroupsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>

---


### DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList <a name="DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList;

new DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference <a name="DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_groups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference;

new DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups">DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups">DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups</a>

---



