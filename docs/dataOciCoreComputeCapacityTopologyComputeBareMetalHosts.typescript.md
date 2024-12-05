# `dataOciCoreComputeCapacityTopologyComputeBareMetalHosts` Submodule <a name="`dataOciCoreComputeCapacityTopologyComputeBareMetalHosts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityTopologyComputeBareMetalHosts <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHosts" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts oci_core_compute_capacity_topology_compute_bare_metal_hosts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts(scope: Construct, id: string, config: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeHpcIslandId">resetComputeHpcIslandId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeLocalBlockId">resetComputeLocalBlockId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeNetworkBlockId">resetComputeNetworkBlockId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetComputeHpcIslandId` <a name="resetComputeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeHpcIslandId"></a>

```typescript
public resetComputeHpcIslandId(): void
```

##### `resetComputeLocalBlockId` <a name="resetComputeLocalBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeLocalBlockId"></a>

```typescript
public resetComputeLocalBlockId(): void
```

##### `resetComputeNetworkBlockId` <a name="resetComputeNetworkBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeNetworkBlockId"></a>

```typescript
public resetComputeNetworkBlockId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeBareMetalHosts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeBareMetalHosts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeCapacityTopologyComputeBareMetalHosts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeCapacityTopologyComputeBareMetalHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityTopologyComputeBareMetalHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeBareMetalHostCollection">computeBareMetalHostCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyIdInput">computeCapacityTopologyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandIdInput">computeHpcIslandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockIdInput">computeLocalBlockIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockIdInput">computeNetworkBlockIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyId">computeCapacityTopologyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandId">computeHpcIslandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockId">computeLocalBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockId">computeNetworkBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `computeBareMetalHostCollection`<sup>Required</sup> <a name="computeBareMetalHostCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeBareMetalHostCollection"></a>

```typescript
public readonly computeBareMetalHostCollection: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filter"></a>

```typescript
public readonly filter: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computeCapacityTopologyIdInput`<sup>Optional</sup> <a name="computeCapacityTopologyIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyIdInput"></a>

```typescript
public readonly computeCapacityTopologyIdInput: string;
```

- *Type:* string

---

##### `computeHpcIslandIdInput`<sup>Optional</sup> <a name="computeHpcIslandIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandIdInput"></a>

```typescript
public readonly computeHpcIslandIdInput: string;
```

- *Type:* string

---

##### `computeLocalBlockIdInput`<sup>Optional</sup> <a name="computeLocalBlockIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockIdInput"></a>

```typescript
public readonly computeLocalBlockIdInput: string;
```

- *Type:* string

---

##### `computeNetworkBlockIdInput`<sup>Optional</sup> <a name="computeNetworkBlockIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockIdInput"></a>

```typescript
public readonly computeNetworkBlockIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeCapacityTopologyId`<sup>Required</sup> <a name="computeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyId"></a>

```typescript
public readonly computeCapacityTopologyId: string;
```

- *Type:* string

---

##### `computeHpcIslandId`<sup>Required</sup> <a name="computeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandId"></a>

```typescript
public readonly computeHpcIslandId: string;
```

- *Type:* string

---

##### `computeLocalBlockId`<sup>Required</sup> <a name="computeLocalBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockId"></a>

```typescript
public readonly computeLocalBlockId: string;
```

- *Type:* string

---

##### `computeNetworkBlockId`<sup>Required</sup> <a name="computeNetworkBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockId"></a>

```typescript
public readonly computeNetworkBlockId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection: dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection = { ... }
```


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems: dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems = { ... }
```


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig: dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeCapacityTopologyId">computeCapacityTopologyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeHpcIslandId">computeHpcIslandId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeLocalBlockId">computeLocalBlockId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeNetworkBlockId">computeNetworkBlockId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeCapacityTopologyId`<sup>Required</sup> <a name="computeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeCapacityTopologyId"></a>

```typescript
public readonly computeCapacityTopologyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}.

---

##### `computeHpcIslandId`<sup>Optional</sup> <a name="computeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeHpcIslandId"></a>

```typescript
public readonly computeHpcIslandId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}.

---

##### `computeLocalBlockId`<sup>Optional</sup> <a name="computeLocalBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeLocalBlockId"></a>

```typescript
public readonly computeLocalBlockId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}.

---

##### `computeNetworkBlockId`<sup>Optional</sup> <a name="computeNetworkBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeNetworkBlockId"></a>

```typescript
public readonly computeNetworkBlockId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#filter DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter: dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#name DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#values DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#regex DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#name DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#values DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#regex DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeCapacityTopologyId">computeCapacityTopologyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeHpcIslandId">computeHpcIslandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeLocalBlockId">computeLocalBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeNetworkBlockId">computeNetworkBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceShape">instanceShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeCapacityTopologyId`<sup>Required</sup> <a name="computeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeCapacityTopologyId"></a>

```typescript
public readonly computeCapacityTopologyId: string;
```

- *Type:* string

---

##### `computeHpcIslandId`<sup>Required</sup> <a name="computeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeHpcIslandId"></a>

```typescript
public readonly computeHpcIslandId: string;
```

- *Type:* string

---

##### `computeLocalBlockId`<sup>Required</sup> <a name="computeLocalBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeLocalBlockId"></a>

```typescript
public readonly computeLocalBlockId: string;
```

- *Type:* string

---

##### `computeNetworkBlockId`<sup>Required</sup> <a name="computeNetworkBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeNetworkBlockId"></a>

```typescript
public readonly computeNetworkBlockId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instanceShape`<sup>Required</sup> <a name="instanceShape" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceShape"></a>

```typescript
public readonly instanceShape: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems</a>

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection</a>

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>[]

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityTopologyComputeBareMetalHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>

---



