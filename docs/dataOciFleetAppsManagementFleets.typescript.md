# `dataOciFleetAppsManagementFleets` Submodule <a name="`dataOciFleetAppsManagementFleets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementFleets <a name="DataOciFleetAppsManagementFleets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets oci_fleet_apps_management_fleets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets(scope: Construct, id: string, config?: DataOciFleetAppsManagementFleetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig">DataOciFleetAppsManagementFleetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig">DataOciFleetAppsManagementFleetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetEnvironmentType">resetEnvironmentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetFleetType">resetFleetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFleetAppsManagementFleetsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter">DataOciFleetAppsManagementFleetsFilter</a>[]

---

##### `resetApplicationType` <a name="resetApplicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetApplicationType"></a>

```typescript
public resetApplicationType(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnvironmentType` <a name="resetEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetEnvironmentType"></a>

```typescript
public resetEnvironmentType(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFleetType` <a name="resetFleetType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetFleetType"></a>

```typescript
public resetFleetType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProduct` <a name="resetProduct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetProduct"></a>

```typescript
public resetProduct(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementFleets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementFleets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementFleets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementFleets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementFleets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList">DataOciFleetAppsManagementFleetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.fleetCollection">fleetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList">DataOciFleetAppsManagementFleetsFleetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.applicationTypeInput">applicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.environmentTypeInput">environmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter">DataOciFleetAppsManagementFleetsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.fleetTypeInput">fleetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.environmentType">environmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.fleetType">fleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.filter"></a>

```typescript
public readonly filter: DataOciFleetAppsManagementFleetsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList">DataOciFleetAppsManagementFleetsFilterList</a>

---

##### `fleetCollection`<sup>Required</sup> <a name="fleetCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.fleetCollection"></a>

```typescript
public readonly fleetCollection: DataOciFleetAppsManagementFleetsFleetCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList">DataOciFleetAppsManagementFleetsFleetCollectionList</a>

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.applicationTypeInput"></a>

```typescript
public readonly applicationTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.environmentTypeInput"></a>

```typescript
public readonly environmentTypeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFleetAppsManagementFleetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter">DataOciFleetAppsManagementFleetsFilter</a>[]

---

##### `fleetTypeInput`<sup>Optional</sup> <a name="fleetTypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.fleetTypeInput"></a>

```typescript
public readonly fleetTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementFleetsConfig <a name="DataOciFleetAppsManagementFleetsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetsConfig: dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.applicationType">applicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#application_type DataOciFleetAppsManagementFleets#application_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#compartment_id DataOciFleetAppsManagementFleets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#display_name DataOciFleetAppsManagementFleets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.environmentType">environmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#environment_type DataOciFleetAppsManagementFleets#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter">DataOciFleetAppsManagementFleetsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.fleetType">fleetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#fleet_type DataOciFleetAppsManagementFleets#fleet_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#id DataOciFleetAppsManagementFleets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.product">product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#product DataOciFleetAppsManagementFleets#product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#state DataOciFleetAppsManagementFleets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#application_type DataOciFleetAppsManagementFleets#application_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#compartment_id DataOciFleetAppsManagementFleets#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#display_name DataOciFleetAppsManagementFleets#display_name}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#environment_type DataOciFleetAppsManagementFleets#environment_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFleetAppsManagementFleetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter">DataOciFleetAppsManagementFleetsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#filter DataOciFleetAppsManagementFleets#filter}

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#fleet_type DataOciFleetAppsManagementFleets#fleet_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#id DataOciFleetAppsManagementFleets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `product`<sup>Optional</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#product DataOciFleetAppsManagementFleets#product}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#state DataOciFleetAppsManagementFleets#state}.

---

### DataOciFleetAppsManagementFleetsFilter <a name="DataOciFleetAppsManagementFleetsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetsFilter: dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#name DataOciFleetAppsManagementFleets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#values DataOciFleetAppsManagementFleets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#regex DataOciFleetAppsManagementFleets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#name DataOciFleetAppsManagementFleets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#values DataOciFleetAppsManagementFleets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleets#regex DataOciFleetAppsManagementFleets#regex}.

---

### DataOciFleetAppsManagementFleetsFleetCollection <a name="DataOciFleetAppsManagementFleetsFleetCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollection.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetsFleetCollection: dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollection = { ... }
```


### DataOciFleetAppsManagementFleetsFleetCollectionItems <a name="DataOciFleetAppsManagementFleetsFleetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItems.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetsFleetCollectionItems: dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItems = { ... }
```


### DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences: dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences = { ... }
```


### DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences: dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences = { ... }
```


### DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria: dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria = { ... }
```


### DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules: dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules = { ... }
```


### DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions: dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementFleetsFilterList <a name="DataOciFleetAppsManagementFleetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter">DataOciFleetAppsManagementFleetsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementFleetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter">DataOciFleetAppsManagementFleetsFilter</a>[]

---


### DataOciFleetAppsManagementFleetsFilterOutputReference <a name="DataOciFleetAppsManagementFleetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter">DataOciFleetAppsManagementFleetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementFleetsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFilter">DataOciFleetAppsManagementFleetsFilter</a>

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsList <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.preferences">preferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList">DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences">DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `preferences`<sup>Required</sup> <a name="preferences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.preferences"></a>

```typescript
public readonly preferences: DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList">DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList</a>

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences">DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferences</a>

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.onJobFailure">onJobFailure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.onTopologyModification">onTopologyModification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule">onUpcomingSchedule</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences">DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onJobFailure`<sup>Required</sup> <a name="onJobFailure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.onJobFailure"></a>

```typescript
public readonly onJobFailure: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `onTopologyModification`<sup>Required</sup> <a name="onTopologyModification" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.onTopologyModification"></a>

```typescript
public readonly onTopologyModification: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `onUpcomingSchedule`<sup>Required</sup> <a name="onUpcomingSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule"></a>

```typescript
public readonly onUpcomingSchedule: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences">DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesPreferences</a>

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.environmentType">environmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.fleetType">fleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.groupType">groupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.isTargetAutoConfirm">isTargetAutoConfirm</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.notificationPreferences">notificationPreferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList">DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.products">products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.resourceSelectionType">resourceSelectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.ruleSelectionCriteria">ruleSelectionCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItems">DataOciFleetAppsManagementFleetsFleetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `groupType`<sup>Required</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.groupType"></a>

```typescript
public readonly groupType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isTargetAutoConfirm`<sup>Required</sup> <a name="isTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.isTargetAutoConfirm"></a>

```typescript
public readonly isTargetAutoConfirm: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `notificationPreferences`<sup>Required</sup> <a name="notificationPreferences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.notificationPreferences"></a>

```typescript
public readonly notificationPreferences: DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList">DataOciFleetAppsManagementFleetsFleetCollectionItemsNotificationPreferencesList</a>

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `resourceSelectionType`<sup>Required</sup> <a name="resourceSelectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.resourceSelectionType"></a>

```typescript
public readonly resourceSelectionType: string;
```

- *Type:* string

---

##### `ruleSelectionCriteria`<sup>Required</sup> <a name="ruleSelectionCriteria" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.ruleSelectionCriteria"></a>

```typescript
public readonly ruleSelectionCriteria: DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetsFleetCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItems">DataOciFleetAppsManagementFleetsFleetCollectionItems</a>

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.matchCondition">matchCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.matchCondition"></a>

```typescript
public readonly matchCondition: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteria</a>

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup">attrGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey">attrKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue">attrValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attrGroup`<sup>Required</sup> <a name="attrGroup" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup"></a>

```typescript
public readonly attrGroup: string;
```

- *Type:* string

---

##### `attrKey`<sup>Required</sup> <a name="attrKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey"></a>

```typescript
public readonly attrKey: string;
```

- *Type:* string

---

##### `attrValue`<sup>Required</sup> <a name="attrValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue"></a>

```typescript
public readonly attrValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditions</a>

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference <a name="DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.basis">basis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basis`<sup>Required</sup> <a name="basis" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.basis"></a>

```typescript
public readonly basis: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesConditionsList</a>

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules">DataOciFleetAppsManagementFleetsFleetCollectionItemsRuleSelectionCriteriaRules</a>

---


### DataOciFleetAppsManagementFleetsFleetCollectionList <a name="DataOciFleetAppsManagementFleetsFleetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetsFleetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetsFleetCollectionOutputReference <a name="DataOciFleetAppsManagementFleetsFleetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleets } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList">DataOciFleetAppsManagementFleetsFleetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollection">DataOciFleetAppsManagementFleetsFleetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFleetAppsManagementFleetsFleetCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionItemsList">DataOciFleetAppsManagementFleetsFleetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetsFleetCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleets.DataOciFleetAppsManagementFleetsFleetCollection">DataOciFleetAppsManagementFleetsFleetCollection</a>

---



