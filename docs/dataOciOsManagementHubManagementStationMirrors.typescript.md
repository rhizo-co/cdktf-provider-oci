# `dataOciOsManagementHubManagementStationMirrors` Submodule <a name="`dataOciOsManagementHubManagementStationMirrors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagementStationMirrors <a name="DataOciOsManagementHubManagementStationMirrors" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors oci_os_management_hub_management_station_mirrors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors(scope: Construct, id: string, config: DataOciOsManagementHubManagementStationMirrorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig">DataOciOsManagementHubManagementStationMirrorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig">DataOciOsManagementHubManagementStationMirrorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetMirrorStates">resetMirrorStates</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubManagementStationMirrorsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMirrorStates` <a name="resetMirrorStates" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetMirrorStates"></a>

```typescript
public resetMirrorStates(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagementStationMirrors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isConstruct"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagementStationMirrors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagementStationMirrors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagementStationMirrors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagementStationMirrors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList">DataOciOsManagementHubManagementStationMirrorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorsCollection">mirrorsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.managementStationIdInput">managementStationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorStatesInput">mirrorStatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.managementStationId">managementStationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorStates">mirrorStates</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubManagementStationMirrorsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList">DataOciOsManagementHubManagementStationMirrorsFilterList</a>

---

##### `mirrorsCollection`<sup>Required</sup> <a name="mirrorsCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorsCollection"></a>

```typescript
public readonly mirrorsCollection: DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList</a>

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubManagementStationMirrorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementStationIdInput`<sup>Optional</sup> <a name="managementStationIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.managementStationIdInput"></a>

```typescript
public readonly managementStationIdInput: string;
```

- *Type:* string

---

##### `mirrorStatesInput`<sup>Optional</sup> <a name="mirrorStatesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorStatesInput"></a>

```typescript
public readonly mirrorStatesInput: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementStationId`<sup>Required</sup> <a name="managementStationId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.managementStationId"></a>

```typescript
public readonly managementStationId: string;
```

- *Type:* string

---

##### `mirrorStates`<sup>Required</sup> <a name="mirrorStates" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorStates"></a>

```typescript
public readonly mirrorStates: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagementStationMirrorsConfig <a name="DataOciOsManagementHubManagementStationMirrorsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagementStationMirrorsConfig: dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.managementStationId">managementStationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#management_station_id DataOciOsManagementHubManagementStationMirrors#management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name DataOciOsManagementHubManagementStationMirrors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name_contains DataOciOsManagementHubManagementStationMirrors#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#id DataOciOsManagementHubManagementStationMirrors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.mirrorStates">mirrorStates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#mirror_states DataOciOsManagementHubManagementStationMirrors#mirror_states}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managementStationId`<sup>Required</sup> <a name="managementStationId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.managementStationId"></a>

```typescript
public readonly managementStationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#management_station_id DataOciOsManagementHubManagementStationMirrors#management_station_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name DataOciOsManagementHubManagementStationMirrors#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name_contains DataOciOsManagementHubManagementStationMirrors#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubManagementStationMirrorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#filter DataOciOsManagementHubManagementStationMirrors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#id DataOciOsManagementHubManagementStationMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mirrorStates`<sup>Optional</sup> <a name="mirrorStates" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.mirrorStates"></a>

```typescript
public readonly mirrorStates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#mirror_states DataOciOsManagementHubManagementStationMirrors#mirror_states}.

---

### DataOciOsManagementHubManagementStationMirrorsFilter <a name="DataOciOsManagementHubManagementStationMirrorsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagementStationMirrorsFilter: dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#name DataOciOsManagementHubManagementStationMirrors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#values DataOciOsManagementHubManagementStationMirrors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#regex DataOciOsManagementHubManagementStationMirrors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#name DataOciOsManagementHubManagementStationMirrors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#values DataOciOsManagementHubManagementStationMirrors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#regex DataOciOsManagementHubManagementStationMirrors#regex}.

---

### DataOciOsManagementHubManagementStationMirrorsMirrorsCollection <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagementStationMirrorsMirrorsCollection: dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection = { ... }
```


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems: dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagementStationMirrorsFilterList <a name="DataOciOsManagementHubManagementStationMirrorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagementStationMirrorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagementStationMirrorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>[]

---


### DataOciOsManagementHubManagementStationMirrorsFilterOutputReference <a name="DataOciOsManagementHubManagementStationMirrorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagementStationMirrorsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>

---


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.log">log</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.timeLastSynced">timeLastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `log`<sup>Required</sup> <a name="log" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.log"></a>

```typescript
public readonly log: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.timeLastSynced"></a>

```typescript
public readonly timeLastSynced: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems</a>

---


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagementStationMirrors } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection">DataOciOsManagementHubManagementStationMirrorsMirrorsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagementStationMirrorsMirrorsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection">DataOciOsManagementHubManagementStationMirrorsMirrorsCollection</a>

---



