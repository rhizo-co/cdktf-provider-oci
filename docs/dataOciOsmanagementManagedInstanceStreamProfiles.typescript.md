# `dataOciOsmanagementManagedInstanceStreamProfiles` Submodule <a name="`dataOciOsmanagementManagedInstanceStreamProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceStreamProfiles <a name="DataOciOsmanagementManagedInstanceStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles oci_osmanagement_managed_instance_stream_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceStreamProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig">DataOciOsmanagementManagedInstanceStreamProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig">DataOciOsmanagementManagedInstanceStreamProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetModuleName">resetModuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileName">resetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileStatus">resetProfileStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetStreamName">resetStreamName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsmanagementManagedInstanceStreamProfilesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetModuleName` <a name="resetModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetModuleName"></a>

```typescript
public resetModuleName(): void
```

##### `resetProfileName` <a name="resetProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileName"></a>

```typescript
public resetProfileName(): void
```

##### `resetProfileStatus` <a name="resetProfileStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileStatus"></a>

```typescript
public resetProfileStatus(): void
```

##### `resetStreamName` <a name="resetStreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetStreamName"></a>

```typescript
public resetStreamName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceStreamProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceStreamProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceStreamProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsmanagementManagedInstanceStreamProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceStreamProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList">DataOciOsmanagementManagedInstanceStreamProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleStreamProfileOnManagedInstances">moduleStreamProfileOnManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatusInput">profileStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatus">profileStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filter"></a>

```typescript
public readonly filter: DataOciOsmanagementManagedInstanceStreamProfilesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList">DataOciOsmanagementManagedInstanceStreamProfilesFilterList</a>

---

##### `moduleStreamProfileOnManagedInstances`<sup>Required</sup> <a name="moduleStreamProfileOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleStreamProfileOnManagedInstances"></a>

```typescript
public readonly moduleStreamProfileOnManagedInstances: DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsmanagementManagedInstanceStreamProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `profileStatusInput`<sup>Optional</sup> <a name="profileStatusInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatusInput"></a>

```typescript
public readonly profileStatusInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `profileStatus`<sup>Required</sup> <a name="profileStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatus"></a>

```typescript
public readonly profileStatus: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceStreamProfilesConfig <a name="DataOciOsmanagementManagedInstanceStreamProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstanceStreamProfilesConfig: dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileStatus">profileStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsmanagementManagedInstanceStreamProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#filter DataOciOsmanagementManagedInstanceStreamProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `moduleName`<sup>Optional</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}.

---

##### `profileName`<sup>Optional</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}.

---

##### `profileStatus`<sup>Optional</sup> <a name="profileStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileStatus"></a>

```typescript
public readonly profileStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}.

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}.

---

### DataOciOsmanagementManagedInstanceStreamProfilesFilter <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstanceStreamProfilesFilter: dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#name DataOciOsmanagementManagedInstanceStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#values DataOciOsmanagementManagedInstanceStreamProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#regex DataOciOsmanagementManagedInstanceStreamProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#name DataOciOsmanagementManagedInstanceStreamProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#values DataOciOsmanagementManagedInstanceStreamProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#regex DataOciOsmanagementManagedInstanceStreamProfiles#regex}.

---

### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances: dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceStreamProfilesFilterList <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsmanagementManagedInstanceStreamProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>[]

---


### DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsmanagementManagedInstanceStreamProfilesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>

---


### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceStreamProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances</a>

---



