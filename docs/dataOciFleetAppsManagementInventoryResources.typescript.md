# `dataOciFleetAppsManagementInventoryResources` Submodule <a name="`dataOciFleetAppsManagementInventoryResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementInventoryResources <a name="DataOciFleetAppsManagementInventoryResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources oci_fleet_apps_management_inventory_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources(scope: Construct, id: string, config: DataOciFleetAppsManagementInventoryResourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig">DataOciFleetAppsManagementInventoryResourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig">DataOciFleetAppsManagementInventoryResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetDefinedTagEquals">resetDefinedTagEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetFreeformTagEquals">resetFreeformTagEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetInventoryProperties">resetInventoryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetMatchingCriteria">resetMatchingCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetResourceRegion">resetResourceRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFleetAppsManagementInventoryResourcesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter">DataOciFleetAppsManagementInventoryResourcesFilter</a>[]

---

##### `resetDefinedTagEquals` <a name="resetDefinedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetDefinedTagEquals"></a>

```typescript
public resetDefinedTagEquals(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFreeformTagEquals` <a name="resetFreeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetFreeformTagEquals"></a>

```typescript
public resetFreeformTagEquals(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInventoryProperties` <a name="resetInventoryProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetInventoryProperties"></a>

```typescript
public resetInventoryProperties(): void
```

##### `resetMatchingCriteria` <a name="resetMatchingCriteria" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetMatchingCriteria"></a>

```typescript
public resetMatchingCriteria(): void
```

##### `resetResourceRegion` <a name="resetResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetResourceRegion"></a>

```typescript
public resetResourceRegion(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementInventoryResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementInventoryResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementInventoryResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementInventoryResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementInventoryResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList">DataOciFleetAppsManagementInventoryResourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.inventoryResourceCollection">inventoryResourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList">DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.definedTagEqualsInput">definedTagEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter">DataOciFleetAppsManagementInventoryResourcesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.freeformTagEqualsInput">freeformTagEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.inventoryPropertiesInput">inventoryPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.matchingCriteriaInput">matchingCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.resourceCompartmentIdInput">resourceCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.resourceRegionInput">resourceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.definedTagEquals">definedTagEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.freeformTagEquals">freeformTagEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.inventoryProperties">inventoryProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.matchingCriteria">matchingCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.filter"></a>

```typescript
public readonly filter: DataOciFleetAppsManagementInventoryResourcesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList">DataOciFleetAppsManagementInventoryResourcesFilterList</a>

---

##### `inventoryResourceCollection`<sup>Required</sup> <a name="inventoryResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.inventoryResourceCollection"></a>

```typescript
public readonly inventoryResourceCollection: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList">DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagEqualsInput`<sup>Optional</sup> <a name="definedTagEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.definedTagEqualsInput"></a>

```typescript
public readonly definedTagEqualsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFleetAppsManagementInventoryResourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter">DataOciFleetAppsManagementInventoryResourcesFilter</a>[]

---

##### `freeformTagEqualsInput`<sup>Optional</sup> <a name="freeformTagEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.freeformTagEqualsInput"></a>

```typescript
public readonly freeformTagEqualsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inventoryPropertiesInput`<sup>Optional</sup> <a name="inventoryPropertiesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.inventoryPropertiesInput"></a>

```typescript
public readonly inventoryPropertiesInput: string[];
```

- *Type:* string[]

---

##### `matchingCriteriaInput`<sup>Optional</sup> <a name="matchingCriteriaInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.matchingCriteriaInput"></a>

```typescript
public readonly matchingCriteriaInput: string;
```

- *Type:* string

---

##### `resourceCompartmentIdInput`<sup>Optional</sup> <a name="resourceCompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.resourceCompartmentIdInput"></a>

```typescript
public readonly resourceCompartmentIdInput: string;
```

- *Type:* string

---

##### `resourceRegionInput`<sup>Optional</sup> <a name="resourceRegionInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.resourceRegionInput"></a>

```typescript
public readonly resourceRegionInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTagEquals`<sup>Required</sup> <a name="definedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.definedTagEquals"></a>

```typescript
public readonly definedTagEquals: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTagEquals`<sup>Required</sup> <a name="freeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.freeformTagEquals"></a>

```typescript
public readonly freeformTagEquals: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryProperties`<sup>Required</sup> <a name="inventoryProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.inventoryProperties"></a>

```typescript
public readonly inventoryProperties: string[];
```

- *Type:* string[]

---

##### `matchingCriteria`<sup>Required</sup> <a name="matchingCriteria" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.matchingCriteria"></a>

```typescript
public readonly matchingCriteria: string;
```

- *Type:* string

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementInventoryResourcesConfig <a name="DataOciFleetAppsManagementInventoryResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementInventoryResourcesConfig: dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#compartment_id DataOciFleetAppsManagementInventoryResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#resource_compartment_id DataOciFleetAppsManagementInventoryResources#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.definedTagEquals">definedTagEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#defined_tag_equals DataOciFleetAppsManagementInventoryResources#defined_tag_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#display_name DataOciFleetAppsManagementInventoryResources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter">DataOciFleetAppsManagementInventoryResourcesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.freeformTagEquals">freeformTagEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#freeform_tag_equals DataOciFleetAppsManagementInventoryResources#freeform_tag_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#id DataOciFleetAppsManagementInventoryResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.inventoryProperties">inventoryProperties</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#inventory_properties DataOciFleetAppsManagementInventoryResources#inventory_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.matchingCriteria">matchingCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#matching_criteria DataOciFleetAppsManagementInventoryResources#matching_criteria}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#resource_region DataOciFleetAppsManagementInventoryResources#resource_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#state DataOciFleetAppsManagementInventoryResources#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#compartment_id DataOciFleetAppsManagementInventoryResources#compartment_id}.

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#resource_compartment_id DataOciFleetAppsManagementInventoryResources#resource_compartment_id}.

---

##### `definedTagEquals`<sup>Optional</sup> <a name="definedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.definedTagEquals"></a>

```typescript
public readonly definedTagEquals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#defined_tag_equals DataOciFleetAppsManagementInventoryResources#defined_tag_equals}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#display_name DataOciFleetAppsManagementInventoryResources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFleetAppsManagementInventoryResourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter">DataOciFleetAppsManagementInventoryResourcesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#filter DataOciFleetAppsManagementInventoryResources#filter}

---

##### `freeformTagEquals`<sup>Optional</sup> <a name="freeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.freeformTagEquals"></a>

```typescript
public readonly freeformTagEquals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#freeform_tag_equals DataOciFleetAppsManagementInventoryResources#freeform_tag_equals}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#id DataOciFleetAppsManagementInventoryResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inventoryProperties`<sup>Optional</sup> <a name="inventoryProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.inventoryProperties"></a>

```typescript
public readonly inventoryProperties: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#inventory_properties DataOciFleetAppsManagementInventoryResources#inventory_properties}.

---

##### `matchingCriteria`<sup>Optional</sup> <a name="matchingCriteria" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.matchingCriteria"></a>

```typescript
public readonly matchingCriteria: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#matching_criteria DataOciFleetAppsManagementInventoryResources#matching_criteria}.

---

##### `resourceRegion`<sup>Optional</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#resource_region DataOciFleetAppsManagementInventoryResources#resource_region}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#state DataOciFleetAppsManagementInventoryResources#state}.

---

### DataOciFleetAppsManagementInventoryResourcesFilter <a name="DataOciFleetAppsManagementInventoryResourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementInventoryResourcesFilter: dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#name DataOciFleetAppsManagementInventoryResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#values DataOciFleetAppsManagementInventoryResources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#regex DataOciFleetAppsManagementInventoryResources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#name DataOciFleetAppsManagementInventoryResources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#values DataOciFleetAppsManagementInventoryResources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_inventory_resources#regex DataOciFleetAppsManagementInventoryResources#regex}.

---

### DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection <a name="DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection: dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection = { ... }
```


### DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems <a name="DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems: dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementInventoryResourcesFilterList <a name="DataOciFleetAppsManagementInventoryResourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementInventoryResourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter">DataOciFleetAppsManagementInventoryResourcesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementInventoryResourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter">DataOciFleetAppsManagementInventoryResourcesFilter</a>[]

---


### DataOciFleetAppsManagementInventoryResourcesFilterOutputReference <a name="DataOciFleetAppsManagementInventoryResourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter">DataOciFleetAppsManagementInventoryResourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementInventoryResourcesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesFilter">DataOciFleetAppsManagementInventoryResourcesFilter</a>

---


### DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList <a name="DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference <a name="DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems">DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems">DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems</a>

---


### DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList <a name="DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference <a name="DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementInventoryResources } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList">DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection">DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList">DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementInventoryResources.DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection">DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection</a>

---



